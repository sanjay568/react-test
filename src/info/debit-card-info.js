
import React from 'react';

class DebitCardInfo extends React.Component {


  render(){
    return (
      <div className="App">
         <form>
            <div className="form-group">
                <label for="name">Name to be Printed</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="address">Address</label>
                <input type="text" className="form-control"/>
                <input type="radio"/> Same as Personal
                <input type="radio"/> Same as Bussiness
            </div>
    
            <div className="form-group">
                <label for="city">City</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="state">State</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="zipcode">ZipCode</label>
                <input type="text" className="form-control"/>
            </div>
         </form>
      </div>
    );
  }
}

export default DebitCardInfo;
