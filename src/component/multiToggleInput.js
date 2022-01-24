import React, {Component} from 'react';
import ToggleInput from './toggleInput';

class MultiToggleInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      output1 : false,
      output2 : false,
      output3 : false,
      output4 : false
    }
  }

  onChangeState1 = () =>{
    this.setState({
      output1 : this.state.output1 ? false : true
    });
  }
  onChangeState2 = () =>{
    this.setState({
      output2 : this.state.output2 ? false : true
    });
  }
  onChangeState3 = () =>{
    this.setState({
      output3 : this.state.output3 ? false : true
    });
  }
  onChangeState4 = () =>{
    this.setState({
      output4 : this.state.output4 ? false : true
    });
  }

  render(){
    let output = "";
    output += this.state.output1 ? this.props.right[0] : this.props.left[0];
    output += this.state.output2 ? this.props.right[1] : this.props.left[1];
    output += this.state.output3 ? this.props.right[2] : this.props.left[2];
    output += this.state.output4 ? this.props.right[3] : this.props.left[3];

    return(
      <div>
        <ToggleInput left={this.props.left[0]} right={this.props.right[0]} handleOutput={this.onChangeState1}/>
        <ToggleInput left={this.props.left[1]} right={this.props.right[1]} handleOutput={this.onChangeState2}/>
        <ToggleInput left={this.props.left[2]} right={this.props.right[2]} handleOutput={this.onChangeState3}/>
        <ToggleInput left={this.props.left[3]} right={this.props.right[3]} handleOutput={this.onChangeState4}/>
        {output}
      </div>
    );
  }
}

export default MultiToggleInput;
