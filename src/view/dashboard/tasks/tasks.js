import React, { useEffect, useState } from 'react' ;
import Task from '../../../components/task/task';
import { getUserIdFromStorage } from '../../../constants/localstorage';
import { getAllTask } from '../../../constants/services/services';
import './stylee.scss';

const Tasks = () => {

    const [tasks, setTask] = useState([]);

    useEffect(() => {
        getData();
    }, []);
 
    // const idOfUser = localStorage.getItem('userId');

    const getData = async () => {
        const userId = getUserIdFromStorage();
        const {data} = await getAllTask(userId);
        const allTask = data;
        setTask(allTask);
    }


    const totalHours = tasks.reduce((acc, curr) => {
        if(curr.hours > 0){
            acc += curr.hours
        }
        return acc
    }, 0);

    
    return (
        <div>
            <div className="tasks-reviews">
                        {tasks.map((task) => {
                            return(
                                
                                <Task
                                    key={task.id}
                                    title={task.title}
                                    hours={task.hours} />  
                            )
                        })}
            
                <h2>
                    Total hours: {totalHours} h
                </h2>
            </div>
        </div>
    )
}

export default Tasks;