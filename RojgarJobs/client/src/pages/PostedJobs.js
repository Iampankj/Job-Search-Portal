import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { Table } from "antd";
import Modal from 'antd/lib/modal/Modal'
import moment from "moment";
import { EditOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

function PostedJobs() {
    const alljobs = useSelector((state) => state.jobsReducer).jobs;
    const allusers = useSelector((state) => state.usersReducer).users;
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    const userPostedJobs = alljobs.filter((job) => job.postedBy == userid);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState();

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Company",
            dataIndex: "company",
        },
        {
            title: "Posted on",
            dataIndex: "postedOn",
        },
        {
            title: "Applied Candidates",
            dataIndex: "appliedCandidates",
        },
        {
            title: "Actions",
            render: (text, data) => {
                return (
                    <div className="flex">
                        <EditOutlined
                            style={{ fontSize: 20 }}
                            onClick={() => {
                                navigate(`/editjob/${data.completeJobData._id}`);
                            }}
                        />
                        <OrderedListOutlined
                            style={{ fontSize: 20 }}
                            onClick={() => {

                                showModal(job);
                            }}
                        />
                    </div>
                );
            },
        },
    ];

    const dataSource = [];

    for (var job of userPostedJobs) {
        var obj = {
            title: job.title,
            company: job.company,
            postedOn: moment(job.createdAt).format("MMM DD yyyy"),
            appliedCandidates: job.appliedCandidates.length,
            completeJobData: job,
        };
        dataSource.push(obj);
    }

    const showModal = (job) => {
        setIsModalOpen(true);
        setSelectedJob(job);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

function CandidatesList(){
    const candidatesColumns =[
        {
            title: "Candidate ID",
            dataIndex: "candidateId",
            render: (text, data)=>{
                return <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
            }
        },
        {
            title: "Full Name",
            dataIndex: "fullName"
        },
        {
            title: "Applied Date",
            dataIndex: "appliedDate"
        },
    ];

    var candidatesDatasource = []
    for(var candidate of selectedJob.appliedCandidates){
        var user = allusers.find(user => user._id == candidate.userid)
        var obj ={
            candidateId: user._id,
            fullName: user.firstName + " " + user.LastName,
            appliedDate: candidate.appliedDate
        }
        candidatesDatasource.push(obj);
    }

    return <Table columns={candidatesColumns} dataSource={candidatesDatasource}/>
}




    console.log(userPostedJobs);
    return (
        <div>
            <DefaultLayout>
                <h1> Posted Jobs </h1>

                <Table columns={columns} dataSource={dataSource} />

                <Modal
                    title="Applied candidates list"
                    closable={false}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={800}
                >
                    <CandidatesList/>
                </Modal>
            </DefaultLayout>
        </div>
    );
}

export default PostedJobs;
