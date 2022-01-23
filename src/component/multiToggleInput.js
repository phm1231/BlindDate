import React, {Component} from 'react';
import ToggleButton from './component/toggleButton'

class MultiToggleInput extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value : ""
    }
  }

  handleChange(e){
    this.setState({
      value : e.target.value
    });
    console.log(e.target.value);
  }

  render(){
    return(
      <div>
        <ToggleButton left="E" right="I"/>
        <ToggleButton left="S" right="N"/>
        <ToggleButton left="T" right="F"/>
        <ToggleButton left="J" right="P"/>
      </div>
    );
  }
}

export default MultiToggleInput;
