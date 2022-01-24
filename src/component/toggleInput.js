import React, {Component} from 'react';

class ToggleInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggled : false //left가 초기값, right 상태가 토글된 상태
    }
  }

  handleClick = () => {
    this.setState({
      toggled : this.state.toggled ? false : true
    });
  }

  render(){
    const toggled = this.state.toggled;
    let button;

    if(toggled){
      button =
      <div>
        <button onClick={()=>{this.handleClick();this.props.handleOutput();}} type="button" class="btn btn-outline-secondary">{this.props.left}</button>
        <button type="button" class="btn btn-secondary">{this.props.right}</button>
      </div>;
    }
    else{
      button =
        <div>
          <button type="button" class="btn btn-secondary">{this.props.left}</button>
          <button onClick={()=>{this.handleClick();this.props.handleOutput();}} type="button" class="btn btn-outline-secondary">{this.props.right}</button>
        </div>;
    }

    return(
      <div>
        {button}
        {toggled}
      </div>
    );
  }
}

export default ToggleInput;
