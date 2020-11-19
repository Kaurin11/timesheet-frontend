import React, { useState } from 'react';
import DateTrack from '../../../components/dateTrack/dateTrack';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';
import CreateTasks from './../createTasks/createTasks';
import Tasks from './../tasks/tasks';

import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/action';

const Main = ({showTaskStore}) => {

    
    const [showTask, setShowTask] = useState (false);
    const [selectDate , setSelectDate] = useState(new Date())

    const showTaskHandler = () => {
        setShowTask(true)
    } 

    // console.log(props.match.path)

    return (
        <div> 
            <Header 
                // setShowTask={setShowTask}
                // showTaskHandler={showTaskHandler}
                />
            {showTaskStore ? <div > <CreateTasks
                    selectDate={selectDate} /> </div> : null}
            <DateTrack 
                selectDate={selectDate}
                onDateChange={(value) => setSelectDate(value)}/>
            <Tasks />
            <Footer />
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showTaskStore: state.showTaskReducer.showTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setShowTaskStore : () => dispatch(actionCreators.setShowTask())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);