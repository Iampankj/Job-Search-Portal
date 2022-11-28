import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { Table } from "antd";
import moment from "moment";
import {
    EditOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";




function PostedJobs() {
    const alljobs = useSelector((state) => state.jobsReducer).jobs;
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    const userPostedJobs = alljobs.filter((job) => job.postedBy == userid);
    const navigate = useNavigate()

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
            render: (text, data) =>{
                return <div className="flex" >
                    <EditOutlined onClick={()=>{navigate(`/editjob/${data.completeJobData._id}`)}} />
                </div>
            }
        },
    ];

    const dataSource = []

    for(var job of userPostedJobs){
        var obj = {
            title: job.title,
            company: job.company,
            postedOn: moment(job.createdAt).format('MMM DD yyyy'),
            appliedCandidates: job.appliedCandidates.length,
            completeJobData: job
        }
        dataSource.push(obj);
    }

    console.log(userPostedJobs);
    return (
        <div>
            <DefaultLayout>
                <h1> Posted Jobs </h1>

                <Table columns={columns} dataSource={dataSource}/>
            </DefaultLayout>
        </div>
    );
}

export default PostedJobs;
