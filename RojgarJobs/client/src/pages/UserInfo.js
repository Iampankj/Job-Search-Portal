import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'



function UserInfo() {
    const { users } = useSelector(state => state.usersReducer)
    const {id} = useParams();
    const user = users.find(user => user._id == id)
    return (
        <div>
            <DefaultLayout>
                {user && (
                    <div>
                        <h3><b>Personal information</b></h3>
                        <p><b>First name: </b> {user.firstName}</p>
                        <p><b>Last name: </b> {user.lastName}</p>
                        <p><b>Email: </b> {user.email}</p>
                        <p><b>Mobile number: </b> {user.mobileNumber}</p>
                        <p><b>Address: </b> {user.address}</p>
                        <hr/>
                        <h3><b>Skills</b></h3>
                        {user.skills.map(skill =>{
                            return <li key={skill}>{skill}</li>
                        })}
                        <hr/>
                        <h3><b>Education</b></h3>
                        {user.education.map(education =>{
                            return <li key={education}>{education}</li>
                        })}
                        <hr/>
                        <h3><b>Projects</b></h3>
                        {user.projects.map(project =>{
                            return <li key={project}>{project}</li>
                        })}
                        <hr/>
                        <h3><b>Experience</b></h3>
                        {user.experience.map(experience =>{
                            return <li key={experience}>{experience}</li>
                        })}
                    </div>
                )}
            </DefaultLayout>
        </div>
    )
}

export default UserInfo