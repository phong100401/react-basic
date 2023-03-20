import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('miss')
            return;
        }
        console.log(this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 11),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="name-job">Name job:</label><br />
                    <input type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)} />
                    <br />
                    <label htmlFor="salary">Salary: </label><br />
                    <input type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} />
                    <br />
                    <input type="submit" onClick={(event) => this.handSubmit(event)} />
                </form>
            </>
        )
    }
}

export default AddComponent;