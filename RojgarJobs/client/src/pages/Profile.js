import React, { useState } from 'react'
import DefaultLayout from "../components/DefaultLayout"
import { Row, Col, Form, Tabs, Input, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { Field } from 'rc-field-form'




function Profile() {
    const[personalInfo, setPersonalInfo] = useState()
    const[activeTab, setActiveTab] = useState()

    function onPersonalInfoSubmit(values){
        setPersonalInfo(values)
        console.log(values)
        setActiveTab("2")
    }

    const user = JSON.parse(localStorage.getItem('user'))


    return (
        <div>
            <DefaultLayout>
                <Tabs defaultActiveKey="1" activeKey={activeTab}>
                    <Tabs.TabPane tab="Personal Info" key="1">
                        <Form layout='vertical' onFinish={onPersonalInfoSubmit} initialValues={user}>
                            <Row gutter={16}>
                                <Col lg={8} sm={24}>
                                    <Form.Item label='First name' required rules={[{required: true}]} name='firstName'>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label='Last name' required rules={[{required: true}]} name='lastName'>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label='Email' required rules={[{required: true}]} name='email'>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label='Mobile Number' required rules={[{required: true}]} name='mobileNumber'>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label='Portfolio' required rules={[{required: true}]} name='portfolio'>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <Form.Item label='About' required rules={[{required: true}]} name='about'>
                                        <TextArea rows={4}/>
                                    </Form.Item>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <Form.Item label='Address' required rules={[{required: true}]} name='address'>
                                        <TextArea rows={4}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button htmlType='submit'>Next</Button>

                        </Form>


                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Skills and Education" key="2">
                        <Form initialValues={{education:['']}} layout="vertical">
                            <Row>
                            <Col lg={24} sm={24}>
                                <Form.List name='education'>
                                    {(education, {add, remove})=>(
                                        <div>
                                            {education.map(field => (
                                                
                                                <div className='flex'>
                                                    <Form.Item required {...field} label="Education" style={{width:'80%'}} rules={[{required:true}]}>
                                                        <TextArea rows={4}/>
                                                    </Form.Item>
                                                    <Button>Add more</Button>
                                                    <Button>Delete</Button>
                                                </div>
                                                
                                            ))}
                                        </div>
                                    )}
                                </Form.List>
                                </Col>
                            </Row>
                        </Form>
                    </Tabs.TabPane>
                    
                </Tabs>
            </DefaultLayout>
        </div>
    )
}

export default Profile