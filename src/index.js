import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner' ;

class App extends React.Component{
    
 state = { lat: null , errorMessage: ''};
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({ lat : position.coords.latitude} )
            },
            err =>{
                this.setState({errorMessage:err.message})
            }
        );
    }
    rendercontent(){
        if(this.state.lat && !this.state.errorMessage){
            return  < SeasonDisplay  lat = {this.state.lat}/>
        }
        if(!this.state.lat && this.state.errorMessage){
            return <div> ERROR:{this.state.errorMessage} </div>
         }
       else{
             return(<Spinner //message = 'please, accept location request!!'
             />)
           }
    };
    render(){
      return(
          <div className="border-red"> {this.rendercontent()}</div>
      );
    }
}

  ReactDOM.render( <App/> , document.querySelector('#root'));