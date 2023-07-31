import { useState } from 'react';
import '../CSS/chore-card.css'
import DailyChores from './DailyChores';
import DishChores from './DishChores';

const CurrentKids = () => {
    let [currentKids, setCurrentKids] = useState([
        {id:1, name:'Tristan'},
        {id:2, name:'Brecka'},
        {id:3, name:'Brynlee'},
        {id:4,name:'Tyson'},
        {id:5,name:'Brockton'}
    ]);
    const nameList = currentKids.map(kid => <li key={kid.id}>{kid.name}</li>)
    const [dailyRender , setDailyRender] = useState(true);
    const [dishRender, setDishRender] = useState(false);
 
const handleButton= () =>{

    if(dailyRender){
        setDailyRender(false)
        setDishRender(true);
    }else{
        setDishRender(false);
        setDailyRender(true);
    }
    
}

    return (
        <div>
        <div className="current-kids-div">
            <div className="currentKids">
            <h2>Current Kids:</h2>
            <ul>
                {nameList}
            </ul>
            
        </div>
        <div className="buttons-div">
            <button onClick={() =>{handleButton()}} className="button">Dish/Daily Chores</button>
            
        </div>
        
        </div>
        {dailyRender && <DailyChores />}
        {dishRender && < DishChores />}
        </div>
      );
}
 
export default CurrentKids;