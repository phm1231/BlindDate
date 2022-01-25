import React, {Component} from 'react';
import MessageError from "./messageError";
import InputPassword from "./inputPassword";

class SignIn extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="container-xl border border-primary">
                <form>
                    <div className="form-group">
                        <label htmlFor="InputId1">아이디</label>
                        <input type="email" className="form-control" id="InputId1" aria-describedby="emailHelp"/>
                        <MessageError/>
                   </div>
                        <InputPassword/>
                    <button onClick={this.props.handleOut} type="button" className="btn btn-primary">로그인</button>
                </form>
            </div>
        );
    }
}

export default SignIn;

