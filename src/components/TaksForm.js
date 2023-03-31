import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react'
import axios from 'axios'

function TaskForm(props) {
    const [heading,setHeading] = useState('')
    const [description,setDescription] = useState('')
    const [place,setPlace] = useState('')
    const [dueTo,setDueTo] = useState()

    const handleSubmit = (e) => {
        //alert('A Task was submitted: ' + newTask);
        axios.post(`http://localhost:5000/users`,{heading:heading,description:description,dueTo:dueTo,place:place,userEmail:props.userEmail})
        .then(()=>props.change())
        .catch(err=>console.error(err.response.data))
        e.preventDefault();
    }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Write new task here...</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Task heading" value={heading} onChange={e => setHeading(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Task description" value={description} onChange={e => setDescription(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter where" value={place} onChange={e => setPlace(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="datetime-local" placeholder="" value={dueTo} onChange={e => setDueTo(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TaskForm;