import React, {Component} from 'react';
import MessageError from "./messageError";

class InputPassword extends Component {
    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.checkValidity = this.checkValidity.bind(this);
        this.state = {
            value : "",
            error : "error_no"
        };
    }

    handleChange(e){
        this.setState({
            value : e.target.value
        });
        this.checkValidity(e.target.value);
    }

    checkValidity(password){
        const regex = /[^a-zA-Z0-9]/;
        if(regex.test(password)){
            this.setState({
                error : "error_different_password"
            });
        }
        else if(password == ""){
            this.setState({
                error : "error_no"
            });
        }
        else{
            this.setState({
                error : "no_error"
            });
        }
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="InputPassword1">비밀번호</label>
                <input onChange={this.handleChange} value={this.state.value} type="password" className="form-control" id="InputPassword1"/>
                <MessageError category={this.state.error}/>
            </div>
        );
    }
}

export default InputPassword;