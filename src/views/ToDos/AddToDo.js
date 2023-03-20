import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickTodo = () => {
        if (!this.state.title) {
            toast.error(`missing title`)
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 11),
            title: this.state.title
        }

        this.props.addNewToDo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button className="add" type="button" onClick={() => this.handleClickTodo()}>Add</button>
            </div>
        )
    }
}

export default AddToDo;