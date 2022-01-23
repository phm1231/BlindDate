import React, {Component} from 'react';
import { useEffect, useState } from 'react';

class DashBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapse : false,
      select : false
    };
  }

  handleClick = () => {
    this.setState({
      collapse : true,
      select : false
    });
  }

  render() {
    const isCollapse = this.state.collapse;
    const isSelect = this.state.select;
    let page;
    if(!isCollapse) {
      page =
        <div class="jumbotron bg-white">
          <h1 class="display-4">지금 당장 자신의 인연을 확인해보세요!</h1>
          <p class="lead">대충 괜찮은 멘트</p>
          <hr class="my-4"/>
          <p>당신을 위한 인연이 준비중입니다.</p>
          <button onClick={this.handleClick} class="btn btn-primary btn-lg" type="button">지금 당장 확인하기</button>
        </div>;
    }
    else{
      if(!isSelect){
        page =
          <div>
            <div class="spinner-border text-primary" role="status">
            </div>
          </div>;
      }
      else{
        page =
          <div>
            <div class="row">
              <div class="col">
                <img src="..." alt="..." class="img-thumbnail"/>
              </div>
              <div class="col">
                <h3>회원정보</h3>
                <p>키 : 185-190</p>
                <p>나이 : 25</p>
                <p>MBTI : ISTJ</p>
                <p>학과 : 국어국문학과</p>
              </div>
            </div>
            <div class="row row-cols-2">
              <div class="col">
                <button type="button" class="btn btn-outline-primary btn-lg btn-block">요청</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-light btn-lg btn-block">다음</button>
              </div>
            </div>
          </div>
      }
    }
    if(this.props.pageNum == 2){
      page =
        <div>
          <div class="row">
            <div class="col">
              <img src="img/ahri_splash_9.jpg" alt="..." class="img-thumbnail"/>
            </div>
            <div class="col">
              <h3>회원정보</h3>
              <p>키 : 185-190</p>
              <p>나이 : 25</p>
              <p>MBTI : ISTJ</p>
              <p>학과 : 국어국문학과</p>
            </div>
          </div>
          <div class="row row-cols-2">
            <div class="col">
              <button type="button" class="btn btn-outline-primary btn-lg btn-block">요청</button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-light btn-lg btn-block">다음</button>
            </div>
          </div>
        </div>
    }
    if(this.props.pageNum == 3){
      page =
        <div>
          <h1>알림</h1>
          <div class="media d-flex">
            <img src="img/logo192.png" class="mr-3" alt="..."/>
            <div class="media-body">
              <h5 class="mt-0">데이트 요청 알림</h5>
              누구누구 님이 당신을 맘에 들어했습니다.
            </div>
          </div>
        </div>
    }
    return(
     <div>
        {page}
      </div>
    );
  }
}

export default DashBoard;
