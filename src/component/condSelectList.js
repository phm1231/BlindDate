import React, {Component} from 'react';
import SelectList from './selectList';

class CondSelectList extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selected : 0
    };
  }

  handleChange(e){
    this.setState({
      selected : e.target.value
    });
    console.log(e.target.value);
  }

  render(){
    const optionList = this.props.lists.map((option) => <option value={option.id}>{option.text}</option>);
    const selectedOptionList = this.props.nestedLists[this.state.selected].map((option) => <option value={option.id}>{option.text}</option>);

    return(
      <div>
        <select class="custom-select" onChange={this.handleChange} >
          <option selected value='0'>{this.props.title}</option>
          {optionList}
        </select>
        <select class="custom-select">
          <option selected>{this.props.nestedTitle}</option>
          {selectedOptionList}
        </select>
      </div>
    );
  }
}

export default CondSelectList;
