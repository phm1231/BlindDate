import React, {Component} from 'react';

class SlideInput extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value : 0
    }
  }

  handleChange(e){
    this.setState({
      value : e.target.value
    });
    console.log(e.target.value);
  }

  render(){
    const age = parseInt(this.state.value)+19;
    let output;
    
    if(age == 19){
      output = "상관 없음"
    }
    else if(age == 31){
      output = "상관 없음"
    }
    else {
      output = age;
    }

    return(
      <div>
        <label for={this.props.id}>{this.props.name}</label>
        <input onChange={this.handleChange} type="range" class="bg-white" min="0" max="12" id={this.props.id}/>
        {output}
      </div>
    )
  }
}

export default SlideInput
