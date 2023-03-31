import CallingTasks from "./CallingTasks"
import './UserPage.css'

function UserPage(props) {
    return(
        <div className="userContainer">
            <h1 className="hello">Hello, here are your tasks</h1>
            <CallingTasks userEmail={props.email}/>
        </div>
    )  
}

export default UserPage