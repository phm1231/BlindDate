import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import DashBoard from './component/dashboard';
import SignUp from './component/signUp';
import NavVar from './component/navVar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      login : false,
      signUp : false,
      page : 1
    };
  }

  handleSignUpClick = () => {
    this.setState({
      login : false,
      signUp : true
    });
  }

  submitSignUpClick = () => {
    this.setState({
      login : true,
      signUp : true,
      page : 1
    });
  }

  handleHomeClick = () => {
    this.setState({
      page : 1
    });
  }

  handleMatchingClick = () => {
    this.setState({
      page : 2
    });
  }

  handleMessageClick = () => {
    this.setState({
      page : 3
    });
  }

  render(){
    const isLogin = this.state.login;
    const isSignUp = this.state.signUp;
    const pageNum = this.state.page;
    let page;
    if(isLogin){
      page =
        <div class="container">
          <div class="row">
            <div class="col">
              <NavVar
                item1={<a onClick={this.handleHomeClick} class="nav-link active">홈</a>}
                item2={<a onClick={this.handleMatchingClick} class="nav-link active">나의 매칭</a>}
                item3={<a onClick={this.handleMessageClick} class="nav-link active">알림함</a>}
                pageNum={this.state.page}
              />
            </div>
            <div class="col-8">
              <DashBoard pageNum={this.state.page}/>
            </div>
            <div class="col">
              ad
            </div>
          </div>
        </div>;
    }
    else{
      if(isSignUp){
        page =
          <SignUp handleOut={this.submitSignUpClick}/>
        ;
      }
      else{
        page =
          <div class="container-xl border border-primary">
            <img src="img/caitlyn_splash_12.jpg" class="d-block img-fluid"/>
            <p>대충 가입 권유 하는 메세지</p>
            <p>대충 가입하시면 취향분석을 통해 당신의 이상형을 만나게 해준다는 이야기</p>
            <p><button onClick={this.handleSignUpClick} type="button" class="btn btn-primary btn-block">회원가입</button></p>
            <p><button onClick={this.submitSignUpClick} type="button" class="btn btn-secondary btn-block">로그인</button></p>
          </div>
      }
    }

    return (
      <div class="root">
        {page}
        <div class="footer">
          <div class="row">
            <div class="col-1">
              <img src="img/logo192.png"/>
            </div>
            <div class="col-1">
              company-rights
            </div>
          </div>
          <div class="row">
            (주)블라인드 데이트 Anyway-copyrights@gmail.com
          </div>
        </div>
      </div>
    );
  }
}

export default App;
