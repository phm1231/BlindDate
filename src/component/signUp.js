import React, {Component} from 'react';

import ToggleInput from './toggleInput';
import MultiToggleInput from './multiToggleInput';
import SlideInput from './slideInput';
import SelectList from './selectList';
import CondSelectList from './condSelectList';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      pageNum : 1,
      value : 1
    };
  }

  onClickNext = () =>{
    this.setState({
      pageNum : this.state.pageNum+1
    });
  }

  handleChange(e){
    this.setState({
      value : e.target.value
    });
    this.checkValidity(this.state.value);
    console.log(this.state.value);
  }

  checkValidity(password){
    const regex = /^[a-zA-Z0-9]/;
    if(password == ""){
      return "비밀번호를 입력해 주세요.";
    }
    if(!regex.test(password)){
      console.log(!regex.test(password));
      return "사용가능하지 않은 문자가 포함되어 있습니다."
    }
  }

  render(){
    let page;
    if(this.state.pageNum == 1){
      page =
        <div>
          <h1>회원 정보</h1>
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
              <input onChange={this.handleChange} value={this.state.value} type="password" class="form-control" id="InputPassword1"/>
            </div>
            <div class="form-group">
              <label for="InputPassword2">비밀번호 확인</label>
              <input type="password" class="form-control" id="InputPassword2"/>
            </div>
          </form>
          <hr class="my-4"/>
          <button onClick={this.onClickNext} type="button" class="btn btn-primary btn-lg btn-block">다음</button>
        </div>
      ;
    }
    else if(this.state.pageNum == 2){
      page =
        <div>
          <h1>회원 정보</h1>
          <hr class="my-4"/>
          <form>
            <div>
              성별<ToggleInput left="남" right="여"/>
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
            <CondSelectList
              title="단과대 선택"
              nestedTitle="학과 선택"
              lists={[
                {id : 1, text : "인문대학"},
                {id : 2, text : "자연과학대학"}/*,
                {id : 3, text : "법과대학"},
                {id : 4, text : "사회과학대학"},
                {id : 5, text : "경제통상대학"},
                {id : 6, text : "경영대학"},
                {id : 7, text : "공대학"},
                {id : 8, text : "IT대학"},
                {id : 9, text : "융합특성화자유전공학부"},
                */
              ]}
              nestedLists={[
                [],
                [
                  {id : 1, text : "국어국문학과"},
                  {id : 2, text : "국어국문학과"},
                  {id : 3, text : "국어국문학과"},
                  {id : 4, text : "국어국문학과"},
                  {id : 5, text : "국어국문학과"},
                  {id : 6, text : "국어국문학과"},
                  {id : 7, text : "국어국문학과"},
                  {id : 8, text : "국어국문학과"},
                  {id : 9, text : "국어국문학과"}
                ],
                [
                  {id : 1, text : "수학과"},
                  {id : 2, text : "수학과"},
                  {id : 3, text : "수학과"},
                  {id : 4, text : "수학과"},
                  {id : 5, text : "수학과"},
                  {id : 6, text : "수학과"},
                  {id : 7, text : "수학과"},
                  {id : 8, text : "수학과"},
                  {id : 9, text : "수학과"}
                ]
              ]}
            />
            <div>
              MBTI
              <MultiToggleInput right="INFP" left="ESTJ"/>
            </div>
            <div class="form-group">
              <label for="hobby">취미</label>
              <textarea type="hobby" class="form-control" id="hobby"/>
            </div>
          </form>
          <hr class="my-4"/>
          <button onClick={this.onClickNext} type="button" class="btn btn-primary btn-lg btn-block">다음</button>
        </div>
      ;
    }
    else{
      page =
        <div>
          <h1>취향 정보</h1>
          <hr class="my-4"/>
          <form>
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
              <MultiToggleInput right="INFP" left="ESTJ"/>
            </div>
            <CondSelectList
              title="단과대 선택"
              nestedTitle="학과 선택"
              lists={[
                {id : 1, text : "인문대학"},
                {id : 2, text : "자연과학대학"}/*,
                {id : 3, text : "법과대학"},
                {id : 4, text : "사회과학대학"},
                {id : 5, text : "경제통상대학"},
                {id : 6, text : "경영대학"},
                {id : 7, text : "공대학"},
                {id : 8, text : "IT대학"},
                {id : 9, text : "융합특성화자유전공학부"},
                */
              ]}
              nestedLists={[
                [],
                [
                  {id : 1, text : "국어국문학과"},
                  {id : 2, text : "국어국문학과"},
                  {id : 3, text : "국어국문학과"},
                  {id : 4, text : "국어국문학과"},
                  {id : 5, text : "국어국문학과"},
                  {id : 6, text : "국어국문학과"},
                  {id : 7, text : "국어국문학과"},
                  {id : 8, text : "국어국문학과"},
                  {id : 9, text : "국어국문학과"}
                ],
                [
                  {id : 1, text : "수학과"},
                  {id : 2, text : "수학과"},
                  {id : 3, text : "수학과"},
                  {id : 4, text : "수학과"},
                  {id : 5, text : "수학과"},
                  {id : 6, text : "수학과"},
                  {id : 7, text : "수학과"},
                  {id : 8, text : "수학과"},
                  {id : 9, text : "수학과"}
                ]
              ]}
            />
          </form>
          <hr class="my-4"/>
          <button onClick={this.props.handleOut} type="button" class="btn btn-primary btn-lg btn-block">확인</button>
        </div>
      ;
    }

    return(
      <div class="container-xl border border-primary">
        {page}
      </div>
    );
  }
}

export default SignUp;
