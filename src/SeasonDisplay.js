import "./SeasonDisplay.css"
import React from "react"; 

const seasonconfig = {
    summer:{
        text: 'Lets Hits the beach' ,
        iconName: 'sun'
    },
    winter:{
        text:'Burr , it is chilly',
        iconName: 'snowflake'
    }
};

// getMonth()...> array of months.
const getSeason = (lat, month) =>{
if(month>2 && month<9){
    return  lat > 0 ? 'summer': 'winter';
} else{
    return lat > 0 ? 'winter': 'summer';
}
};
const SeasonDisplay = (props) =>{
   const Season = getSeason(props.lat, new Date().getMonth()) ;  
   const {text,iconName} =seasonconfig[Season];
  return( 
        <div className = {`season-display ${Season}`}> 
            <i className={`massive icon-left ${iconName} icon`} />
            <h1> {text} </h1> 
            <i className={`massive  icon-right ${iconName} icon`}/> 
        </div>
    )
}
export default SeasonDisplay;