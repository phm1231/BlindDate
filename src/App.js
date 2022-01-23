import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, {Component} from 'react';
import DashBoard from './component/dashboard';
import ToggleButton from './component/toggleButton';
import SlideInput from './component/slideInput';

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
      if(pageNum == 1){
        page =
          <div class="container">
            <div class="row">
              <div class="col">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active">프로필</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleHomeClick} class="nav-link active">홈</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleMatchingClick} class="nav-link active">나의 매칭</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleMessageClick} class="nav-link active">알림함</a>
                  </li>
                </ul>
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
      if(pageNum == 2){
        page =
          <div class="container">
            <div class="row">
              <div class="col">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active">프로필</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleHomeClick} class="nav-link active">홈</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleMatchingClick} class="nav-link active">나의 매칭</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleMessageClick} class="nav-link active">알림함</a>
                  </li>
                </ul>
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
      if(pageNum == 3){
        page =
          <div class="container">
            <div class="row">
              <div class="col">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active">프로필</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleHomeClick} class="nav-link active">홈</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleMatchingClick} class="nav-link active">나의 매칭</a>
                  </li>
                  <li class="nav-item">
                    <a onClick={this.handleMessageClick} class="nav-link active">알림함</a>
                  </li>
                </ul>
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
    }
    else{
      if(isSignUp){
        page =
          <div class="container-xl border border-primary">
            <div id="picture" class="d-block carousel Slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="..." class="d-block w-100" alt="..."/>
                </div>
              </div>
            </div>
            <form>
              <div class="form-group">
                <label class="d-block" for="FormControlFile1">Example file input</label>
                <input type="file" class="form-control-file" id="FormControlFile1"/>
              </div>
              <div class="form-group">
                <label for="InputID1">아이디</label>
                <input type="email" class="form-control" id="InputID1" aria-describedby="IDHelp"/>
              </div>
              <div class="form-group">
                <label for="InputPassword1">비밀번호</label>
                <input type="password" class="form-control" id="InputPassword1"/>
              </div>
              <hr class="my-4"/>
              <h3>회원 정보</h3>
              <div>
                성별<ToggleButton left="남" right="여"/>
              </div>
              <div class="form-group">
                <label for="InputEmail1">아이디</label>
                <input type="email" class="form-control" id="InputEmail1" aria-describedby="EmailHelp"/>
              </div>
              <div class="form-group">
                <label for="InputAge">나이</label>
                <input type="Age" class="form-control" id="InputAge"/>
              </div>
              <div class="form-group">
                <label for="InputHeight">키</label>
                <input type="Height" class="form-control" id="InputHeight"/>
              </div>
              <select class="custom-select">
                <option selected>단과대 선택</option>
                <option value="1">IT대학</option>
              </select>
              <select class="custom-select">
                <option selected>학과 선택</option>
                <option value="1">소프트웨어 학과</option>
              </select>
              <div>
                MBTI
                <ToggleButton left="E" right="I"/>
                <ToggleButton left="S" right="N"/>
                <ToggleButton left="T" right="F"/>
                <ToggleButton left="J" right="P"/>
              </div>
              <div class="form-group">
                <label for="hobby">취미</label>
                <textarea type="hobby" class="form-control" id="hobby"/>
              </div>
              <hr class="my-4"/>
              <h3>취향 정보</h3>
              <select class="custom-select">
                <option selected>키 선택</option>
                <option value="1">150이하</option>
                <option value="2">150-155</option>
                <option value="2">155-160</option>
                <option value="2">160-165</option>
                <option value="2">165-170</option>
                <option value="2">170-175</option>
                <option value="2">175-180</option>
                <option value="2">180-185</option>
                <option value="2">185-190</option>
                <option value="2">190-195</option>
                <option value="2">195이상</option>
              </select>
              <div class="d-block">
                <SlideInput name="최대 나이" id="range1"/>
                <SlideInput name="최소 나이" id="range2"/>
              </div>
              <div>
                MBTI
                <ToggleButton left="E" right="I"/>
                <ToggleButton left="S" right="N"/>
                <ToggleButton left="T" right="F"/>
                <ToggleButton left="J" right="P"/>
              </div>
              <select class="custom-select">
                <option selected>단과대 선택</option>
                <option value="1">IT대학</option>
              </select>
              <select class="custom-select">
                <option selected>학과 선택</option>
                <option value="1">소프트웨어 학과</option>
              </select>
            </form>
            <hr class="my-4"/>
            <button onClick={this.submitSignUpClick} type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
          </div>
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
