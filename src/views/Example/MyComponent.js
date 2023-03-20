import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    //key:value
    state = {
        arrJobs: [
            {
                id: 'abc1',
                title: 'dev',
                salary: '500'
            },
            {
                id: 'abc2',
                title: 'test',
                salary: '400'
            },
            {
                id: 'abc3',
                title: 'pm',
                salary: '1100'
            }
        ]
    }

    addNewJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job)

        this.setState({
            //toán tử coppy ... -> tạo thêm job bên cạnh (Spread_syntax)
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJobs
        })
        console.log('check job', job)
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    render() {

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob} />
            </>
        )
    }
}

export default MyComponent;