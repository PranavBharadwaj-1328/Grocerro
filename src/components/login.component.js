import { Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: this.props.username,
            password: this.props.password,
            data: this.props.data
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        axios.post('http://localhost:5400/auth/getUser', user)
            .then(res =>{
                    // this.setState({
                    //     data: res.body.user
                    // });
                    console.log(res.data);
                }
            )
            .catch(err => console.log(err));
        if(1) {
            window.location = '/cart';
        }
        else {
            alert("Invalid username or password");
        }
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <href onClick={Window.location = '/register'}>New User?</href>
                    </div>
                </form>
            </div>
        );
    }
}