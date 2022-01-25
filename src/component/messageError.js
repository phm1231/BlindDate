import React, {Component} from 'react';

class MessageError extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let message;
        if(this.props.category == "error_different_password"){
            message =
                <small id="emailHelp" className="form-text text-muted">비밀번호에 사용할 수 없는 문자가 포함되어 있습니다</small>
            ;
        }
        else if(this.props.category == "error_no"){
            message =
                <small id="emailHelp" className="form-text text-muted">비밀번호를 입력해 주세요</small>
            ;
        }
        else if(this.props.category == "error_not_same"){
            message =
                <small id="emailHelp" className="form-text text-muted">비밀번호가 일치하지 않습니다</small>
            ;
        }
        else{
            if(this.props.check == "valid"){
                message =
                    <div>사용가능한 비밀번호입니다</div>
                ;
            }
            else if(this.props.check == "same"){
                message =
                    <div>확인</div>
                ;
            }
            else {
                return null;
            }
        }
        return (
            <div>
                {message}
            </div>
        );
    }
}

export default MessageError;