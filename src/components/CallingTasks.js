import TaskForm from './TaksForm'
import './UserPage.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

function CallingTasks(props){

    const [data,setData] = useState([{}])

    const getTasks = () => {
        axios({
            method:'get',
            url:'http://localhost:5000/users/',         
        })
        .then(res=>{
            const temp = res.data.filter(item => item.userId === props.userEmail);
            setData(temp)
        }).catch(err=>console.error(err))
    }

    useEffect(()=>{
        getTasks()
    },[])

    const deleteGoal = id => {
        console.log(id)
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(()=>getTasks())
        .catch(err=>console.error(err.response.data))
      };

    return(
        <div>
            {data && data.map(item=> 
            <div key={item.id} className='userTask'>
               <div><span className='taskText'>{item.heading}</span> <Button onClick={() => deleteGoal(item._id)} variant="danger" className='deleteBtn'>X</Button>{' '}</div> 
               <div><p>{item.description}</p></div>
               <div><p>{item.place}</p></div>
               <div><p>{item.dueTo}</p></div>
            </div>)}
            <TaskForm change = {()=>getTasks()} userEmail={props.userEmail}/>
        </div>
    )
} 

export default CallingTasks