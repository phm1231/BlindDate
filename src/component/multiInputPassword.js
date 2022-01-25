import React, {Component} from 'react';
import MessageError from "./messageError";

class MultiInputPassword extends Component {
    constructor(props) {
        super(props);
        this.handleChangeMain = this.handleChangeMain.bind(this);
        this.handleChangeSub= this.handleChangeSub.bind(this);
        this.checkValidity = this.checkValidity.bind(this);
        this.checkSame = this.checkSame.bind(this);
        this.state = {
            value1 : "",
            value2 : "",
            error1 : "error_no",
            error2 : "error_no"
        };
    }
    handleChangeMain(e){
        this.setState({
            value1 : e.target.value,
            value2 : "",
            error2 : "no_error"
        });
        this.checkValidity(e.target.value);
    }
    handleChangeSub(e){
        this.setState({
            value2 : e.target.value
        });
        this.checkSame(e.target.value);
    }

    checkValidity(password){
        const regex = /[^a-zA-Z0-9]/;
        if(regex.test(password)){
            this.setState({
                error1 : "error_different_password"
            });
        }
        else if(password == ""){
            this.setState({
                error1 : "error_no"
            });
        }
        else{
            this.setState({
                error1 : "no_error"
            });
        }
    }

    checkSame(password){
        if(this.state.erro1 == "error_no"){
            this.setState({
                error2 : "error_no"
            });
        }
        else {
            if (password == this.state.value1) {
                this.setState({
                    error2: "no_error"
                });
            } else {
                this.setState({
                    error2: "error_not_same"
                });
            }
        }
    }

    render() {
        let subForm;

        if(this.state.error1 != "error_no"){
            subForm =
                <div className="form-group">
                    <label htmlFor="InputPassword2">비밀번호 확인</label>
                    <input onChange={this.handleChangeSub} value={this.state.value2} type="password" className="form-control" id="InputPassword2"/>
                    <MessageError category={this.state.error2} check="same"/>
                </div>
            ;
        }

        return (
            <div>
                <div className="form-group">
                    <label htmlFor="InputPassword1">비밀번호</label>
                    <input onChange={this.handleChangeMain} value={this.state.value1} type="password" className="form-control" id="InputPassword1"/>
                    <MessageError category={this.state.error1} check="valid"/>
                </div>
                {subForm}
            </div>
        );
    }
}

export default MultiInputPassword;