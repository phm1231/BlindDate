import React, {Component} from 'react';

class SelectList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const optionList = this.props.lists.map((option) => <option value={option.id}>{option.text}</option>);

    return(
      <select class="custom-select">
        <option selected>{this.props.title}</option>
        {optionList}
      </select>
    );
  }
}

export default SelectList;
