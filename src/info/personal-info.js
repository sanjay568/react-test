
import React from 'react';

class PersonalInfo extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          name: '',
          ssn:'',
          address:'',
          city:'',
          state1:'',
          zipcode:''
      }
  }

  handleSubmit(event){
       sessionStorage.setItem('personData', event.target.value);
  }

  setData = (event) =>{
      let key = event.target.name;
      let value = event.target.value;
      debugger;
      if(key==='name'){
           this.setState({'name': value});
      }
      if(key==='ssn'){
        this.setState({'ssn': value});
   }
   if(key==='address'){
    this.setState({'address': value});
    }
    if(key==='state1'){
        this.setState({'state1': value});
    }
    if(key==='zipcode'){
        this.setState({'zipcode': value});
    }
    if(key==='city'){
        this.setState({'city': value});
    }

    sessionStorage.setItem('personData', JSON.stringify(this.state));
  }

  render(){
    return (
      <div className="App">
          <h2>Personal Info</h2>
          <hr/>
         <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" name="name" required value={this.state.name} onChange={this.setData}/>
            </div>
            <div className="form-group">
                <label for="ssn">SSN</label>
                <input type="text" className="form-control"  name="ssn"   required value={this.state.ssn} onChange={this.setData}/>
            </div>
            <div className="form-group">
                <label for="address">Address</label>
                <input type="text" className="form-control"  name="address"  required value={this.state.address} onChange={this.setData}/>
            </div>
            <div className="form-group">
                <label for="city">City</label>
                <input type="text" className="form-control"  name="city"  required value={this.state.city} onChange={this.setData}/>
            </div>
            <div className="form-group">
                <label for="state">State</label>
                <input type="text" className="form-control"  name="state1"  required value={this.state.state1} onChange={this.setData}/>
            </div>
            <div className="form-group">
                <label for="zipcode">ZipCode</label>
                <input type="text" className="form-control"  name="zipcode"   required value={this.state.zipcode} onChange={this.setData}/>
            </div>
         </form>
      </div>
    );
  }
}

export default PersonalInfo;
