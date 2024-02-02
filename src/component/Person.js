import React, {Component} from 'react';
  let Person = (props) =>{
    console.log(props);
    return(  
        <div>
          <h2>Name: {props.name} and Age: {props.age} years!</h2>
          <h3>Extra Info: {props.children}</h3>
      </div>);
      
  }



/*   class Person extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(  
            <div>
              <h2>Name: {this.props.name} and Age: {this.props.age} years!</h2>
              <h3>Extra Info: {this.props.children}</h3>
          </div>);
    }



  } */
export default Person;