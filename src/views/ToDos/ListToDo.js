import React from "react";
import AddToDo from "./AddToDo";
import './ListToDo.scss'
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        listToDo: [
            {
                id: 'todo1',
                title: 'Doing homework'
            },
            {
                id: 'todo2',
                title: 'FixBug'
            },
            {
                id: 'todo3',
                title: 'Gyms'
            }
        ],
        editTodo: {

        }
    }

    addNewToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })

        toast.success("Bum")
    }

    handleDeleteToDo = (todo) => {
        let currenTodo = this.state.listToDo;
        currenTodo = currenTodo.filter(item => item.id !== todo.id)

        this.setState({
            listToDo: currenTodo
        })
    }

    handleEditTodo = (todo) => {
        let { listToDo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCoppy = [...listToDo]

            let objIndex = listTodoCoppy.findIndex((item => item.id === todo.id));

            listTodoCoppy[objIndex].title = editTodo.title;

            this.setState({
                listToDo: listTodoCoppy,
                editTodo: {}
            })
            toast.success("Update todo success")
            return
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleChangeEditTodo = (event) => {
        let editTodoCoppy = { ...this.state.editTodo }
        editTodoCoppy.title = event.target.value
        this.setState({
            editTodo: editTodoCoppy
        })
    }
    render() {
        let { listToDo, editTodo } = this.state;
        //=== 0 là đk so sánh nếu === 0 thì đk true còn k thì false
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log("check empty", isEmptyObj)
        console.log(listToDo)

        return (
            <><p>
                ToDo App
            </p>
                <div className="list-todo-container">
                    <AddToDo addNewToDo={this.addNewToDo} />
                    <div className="list-todo-content">
                        {listToDo && listToDo.length > 0 &&
                            listToDo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'}
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteToDo(item)}>Delete</button>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </>
        )
    }

}

export default ListToDo;