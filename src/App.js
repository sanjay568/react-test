
import './App.css';
import React from 'react';
import {RangeStepInput} from 'react-range-step-input';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value: 0,
          count:0
      };
      
  }
 
  render() {
      return <div>
        
          <RangeStepInput
              min={0} max={100}
              value={this.state.value} step={1}
              onChange={this.onChange.bind(this)}
          />
          {this.state.count ===100 ? this.incrementToInfinite(): this.state.count }
      </div>;
  };
  onChange(e) {

        this.setState({
            value : this.state.value+1,
            count:this.state.count+1
        });
      
  }

  incrementToInfinite(){
     for(let i= this.state.count;i<200;i++){
         if(i>199){
            break;
         }else{
        
        this.setState({
            count: i
        });
         }
     }
  }
};
  
export default App;
