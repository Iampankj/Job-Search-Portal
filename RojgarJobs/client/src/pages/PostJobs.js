import React, { useState } from 'react'
import DefaultLayout from "../components/DefaultLayout"
import { Row, Col, Form, Tabs, Input, Button, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { useDispatch } from 'react-redux'
import { postJob } from '../redux/actions/jobActions'
const{Option} = Select;


function PostJobs() {

    const [jobInfo, setJobInfo] = useState({})
    const [activeTab, setActiveTab]= useState("0")
    const dispatch = useDispatch()

    function onFirstFormFinish(values){
        setJobInfo(values)
        setActiveTab("1")
        
    }

    function onFinalFormFinish(values){
        const finalObj = {...jobInfo, ...values};
        console.log(finalObj)
        dispatch(postJob(finalObj))
        
    }

    return (
        <div>
            <DefaultLayout>
                <Tabs defaultActiveKey='0' activeKey={activeTab}>
                    <Tabs.TabPane tab="Job Info" key='0'>
                        <Form layout='vertical' onFinish={onFirstFormFinish}>
                            <Row gutter={16}>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="title" rules={[{required: true}]} label="Title">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="department" rules={[{required: true}]} label="Department">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="experience" rules={[{required: true}]} label="Experience">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="salaryFrom" rules={[{required: true}]} label="Salary From">
                                        <Input type='number'/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="salaryTo" rules={[{required: true}]} label="salary To">
                                        <Input type='number'/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="skillsRequired" rules={[{required: true}]} label="Skills">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="minimumQualification" rules={[{required: true}]} label="Minimum Qualification">
                                        <Select>
                                        <Option value = 'Degree'>Degree</Option>
                                        <Option value = 'Bachelors'>Bachelors</Option>
                                        <Option value = 'Masters'>Masters</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col lg={24} sm = {24}>
                                    <Form.Item name="smallDescription" rules={[{required: true}]} label="Small Description">
                                        <TextArea rows={3}/>
                                    </Form.Item>
                                    <Form.Item name="fullDescription" rules={[{required: true}]} label="Full Description">
                                        <TextArea rows={6}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button htmlType='submit'>Next</Button>
                        </Form>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Company Info" key='1'>
                        <Form layout='vertical' onFinish={onFinalFormFinish}>
                            <Row gutter={16}>
                            <Col lg={8} sm = {24}>
                                    <Form.Item name="company" rules={[{required: true}]} label="Company Name">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="email" rules={[{required: true}]} label="Company Email">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm = {24}>
                                    <Form.Item name="phoneNumber" rules={[{required: true}]} label="Phone Number">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={24} sm = {24}>
                                    <Form.Item name="companyDescription" rules={[{required: true}]} label="Company Description">
                                        <Input rows = {4} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button onClick={()=>{setActiveTab('0')}}>Previous</Button>
                            <Button htmlType='submit'>Post Job</Button>
                        </Form>
                    </Tabs.TabPane>
                </Tabs>
            </DefaultLayout>
        </div>
    )
}

export default PostJobs