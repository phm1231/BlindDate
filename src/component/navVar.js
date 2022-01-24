import React, {Component} from 'react';

class NavVar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active">프로필</a>
        </li>
        <li class="nav-item">
          {this.props.item1}
        </li>
        <li class="nav-item">
          {this.props.item2}
        </li>
        <li class="nav-item">
          {this.props.item3}
        </li>
      </ul>
    );
  }
}

export default NavVar;
