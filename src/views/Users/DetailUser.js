import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {

    state = {
        user: []
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            //sau dungf try/catch
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log('>>> res:', res)
        }
    }

    handleBack = () => {
        this.props.history.push('/user')
    }

    render() {
        console.log(">>>>", this.props)
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        console.log('check obj', isEmptyObj) // true : 1
        return (
            <>
                <div>Hello detail user with: {this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div>User name: {user.first_name} - {user.last_name}</div>
                        <div>User email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt="" />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBack()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);