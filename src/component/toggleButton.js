import React, {Component} from 'react';

class ToggleButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      right : false,
      left : false,
      output : ""
    }
  }

  leftClick = () => {
    this.setState({
      right : false,
      left : true,
      output : this.props.left
    });
  }
  rightClick = () => {
    this.setState({
      right : true,
      left : false,
      output : this.props.right
    });
  }

  render(){
    const toggledRight = this.state.right;
    const toggledLeft = this.state.left;
    const output = this.state.output;
    let button;

    if(toggledLeft){
      button =
        <div>
          <button onClick={this.leftClick} type="button" class="btn btn-secondary">{this.props.left}</button>
          <button onClick={this.rightClick} type="button" class="btn btn-outline-secondary">{this.props.right}</button>
        </div>;
    }

    if(toggledRight){
      button =
        <div>
          <button onClick={this.leftClick} type="button" class="btn btn-outline-secondary">{this.props.left}</button>
          <button onClick={this.rightClick} type="button" class="btn btn-secondary">{this.props.right}</button>
        </div>;
    }

    if(toggledLeft == false && toggledRight == false){
      button =
        <div>
          <button onClick={this.leftClick} type="button" class="btn btn-outline-secondary">{this.props.left}</button>
          <button onClick={this.rightClick} type="button" class="btn btn-outline-secondary">{this.props.right}</button>
        </div>;
    }

    return(
      <div>
        {button}
      </div>
    );
  }
}

export default ToggleButton;
