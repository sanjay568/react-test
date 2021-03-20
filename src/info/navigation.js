
import React from 'react';

class Navigation extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

    
    return (
      <div>
      <button onClick={this.props.prev}>Previous</button>
      <button onClick={this.props.next}>Next</button>
      </div>
    );
}
  };

  export default Navigation;