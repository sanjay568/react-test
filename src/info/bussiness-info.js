
import React from 'react';

class BussinessInfo extends React.Component {


    constructor(props){
        super(props);
        
        this.state = {
            bname: '',
            stateregisterd:'',
            address:'',
            city:'',
            state1:'',
            zipcode:''
        }

        ;
        console.log(JSON.stringify(sessionStorage.getItem('personData')));
    }
  
    handleSubmit(event){
         sessionStorage.setItem('bussinessdata', event.target.value);
    }
  
    setData = (event) =>{
        let key = event.target.name;
        let value = event.target.value;
        if(key==='bname'){
             this.setState({'bname': value});
        }
        if(key==='stateregisterd'){
          this.setState({'stateregisterd': value});
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

        sessionStorage.setItem('bussinessData',JSON.stringify(this.state));
    }

    setAddress = (event)=>{
         debugger;
        
              var json = JSON.parse(sessionStorage.getItem('personData'));
              console.log(json);
              this.setState({
                address : json.address,
                city: json.city,
                state1: json.state1,
                zipcode: json.zipcode
              })
         
         sessionStorage.setItem('bussinessData',JSON.stringify(this.state));
    }

 componentDidMount(){
     // componentDidMount is a very good place to load data or api call 
     console.log("My component mounted")
 }

 componentWillUnmount(){
    console.log("My component componentWillUnmount")
} 
 componentDidUpdate(){
     // Good place to load more data whenever state/props changes 
    console.log("My component rerendred")
 }

  render(){
    console.log("My component render")
    return (
        <form>
             <h2>Bussiness Info</h2>
          <hr/>
        <div className="form-group">
            <label for="bname">Bussiness Name</label>
            <input type="text" name="bname" className="form-control" value={this.state.bname}  onChange={this.setData}/>
        </div>
        <div className="form-group">
            <label for="stateregisterd">State Registered</label>
            <input type="text" name="stateregisterd" className="form-control" value={this.state.stateregisterd}  onChange={this.setData}/>
        </div>
        <div className="form-group">
            <label for="address" >Address</label>
            <input type="text" name="address" className="form-control" value={this.state.address}  onChange={this.setData}/>
            <input type="radio" onChange={this.setAddress}/> Same as Personal
        </div>
        <div className="form-group">
            <label for="city">City</label>
            <input type="text" name="city" className="form-control" value={this.state.city}  onChange={this.setData}/>
        </div>
        <div className="form-group">
            <label for="state">State</label>
            <input type="text" name="state1" className="form-control" value={this.state.state1}  onChange={this.setData}/>
        </div>
        <div className="form-group">
            <label for="zipcode">ZipCode</label>
            <input type="text" name="zipcode" className="form-control" value={this.state.zipcode}  onChange={this.setData}/>
        </div>
     </form>
    );
  }
}

export default BussinessInfo;
