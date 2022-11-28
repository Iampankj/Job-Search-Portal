import Search from 'antd/lib/input/Search'
//import Modal from 'antd/lib/modal/Modal'
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
            <FilterOutlined onClick={showModal}/>
            <Modal title="Basic Modal" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closable={false}>
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

// import React, { useState } from 'react';

// import { Button, Modal } from 'antd';
// function Filter() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };
// export default Filter;