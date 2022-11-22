import axios from "axios";
import { message } from "antd";

export const registerUser = (values) => async dispatch => {

    dispatch({type:'LOADING', payload: true})
    
    try {
        await axios.post('/api/users/register', values)
        message.success('User Registered Successfully')
        setTimeout(()=>{
        window.location.href='/login'
        },1000);
        dispatch({type:'LOADING', payload: false})
    } catch (error) {
        message.error('Something went wrong. Please try later')
        dispatch({type:'LOADING', payload: false})
    }

}

export const loginUser = (values) => async dispatch => {
    
    dispatch({type:'LOADING', payload: true})
    
    try {
        const user = await axios.post('/api/users/login', values)
        message.success('Login Success')
        localStorage.setItem('user', JSON.stringify(user))
        setTimeout(()=>{
        window.location.href='/'
        },1000)
        dispatch({type:'LOADING', payload: false})
    } catch (error) {
        message.error('Invalid credentials')
        dispatch({type:'LOADING', payload: false})
    }

}
