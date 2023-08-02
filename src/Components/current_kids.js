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

let currentDay = getDay(); // Assuming you have a function that returns the current day

function moveElementsForwardIfNeeded() {
const newKidsArr = [... currentKids];
  const newDay = getDay(); // Get the new day
  if (newDay !== currentDay) {
    
    const element = newKidsArr.shift(); // Remove the first element from the array
    newKidsArr.push(element); // Add the removed element to the end of the array
    currentDay = newDay; // Update the current day to the new day
    setCurrentKids(newKidsArr);
    console.log(currentDay)
}
}

// Function to get the current day (You can replace this with the appropriate logic to get the current day)
function getDay() {
  const now = new Date();
  return now.getDay();
}

// Example usage:
setInterval(moveElementsForwardIfNeeded, 1000); // Check for day change every second (adjust the interval as needed)
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