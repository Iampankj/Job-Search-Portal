import Search from 'antd/lib/input/Search'
import { Modal, Form, Select, Button } from 'antd';
import React, { useState } from 'react'
import {
    FilterOutlined

} from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import { useDispatch } from 'react-redux';
import { searchJobs, sortJobs } from '../redux/actions/jobActions';


function Filter() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    const showModal = () => {
        console.log('show action')
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function sort(values){
        dispatch(sortJobs(values))
        handleCancel()
    }
    return (
        <div className='flex'>

            <Search onSearch={(value)=>{dispatch(searchJobs(value))}}/> 
            {/* <FilterOutlined onClick={showModal}/> */}
            <Modal title="Basic Modal" footer={false} visible={isModalOpen} 
                    onOk={handleOk} onCancel={handleCancel} closable={false}>
                <Form layout='vertical' onFinish={sort}>
                    <Form.Item name='experience' label= "Experience">
                        <Select>
                            <Option value={0}>Fresher</Option>
                            <Option value={1}>1 Year</Option>
                            <Option value={2}>2 Years</Option>
                            <Option value={3}>3 Years</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='salary' label= "Salary">
                        <Select>
                            <Option value={100000}>100000+</Option>
                            <Option value={200000}>200000+</Option>
                            <Option value={600000}>600000+</Option>
                            <Option value={800000}>800000+</Option>
                        </Select>
                    </Form.Item>
                    <Button htmlType='submit'>Filter</Button>
                </Form>
            </Modal>
        </div>
    )
}

export default Filter
