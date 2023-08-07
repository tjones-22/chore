import React, { useState, useEffect } from "react";
import NavBar from "../Components/navbar";
import DailyChores from "../Components/DailyChores";
import DishChores from "../Components/DishChores";

const Home = () => {
  const [currentKids,setCurrentKids] = useState( [
    { id: 1, name: 'Tristan' },
    { id: 2, name: 'Brecka' },
    { id: 3, name: 'Brynlee' },
    { id: 4, name: 'Tyson' },
    { id: 5, name: 'Brockton' }
  ]);

  const nameList = currentKids.map(kid => <li key={kid.id}>{kid.name}</li>);

  const [dayNum, setDayNum] = useState(null);
  const [weekday, setWeekday] = useState(null);
  const [dailyRender, setDailyRender] = useState(true);
  
  useEffect(() => {
    const time = new Date();
    setDayNum(time.getDate());
    setWeekday(time.getDay());
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const switchArr = (arr) => {
    const now = new Date();
    const newDay = now.getDay(); // Use the actual day
    if (weekday !== newDay) {
      const rotatedArr = [...arr];
      const element = rotatedArr.shift();
      rotatedArr.push(element);
      setWeekday(newDay);
      setCurrentKids(rotatedArr); // Assuming you have a state variable called 'setCurrentKids'
      console.log('Switched');
    }
  };
  

  useEffect(() => {
    const intervalId = setInterval(() => switchArr(currentKids), 1000);
    return () => clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
  }, [currentKids]);

  return (
    <div>
      <NavBar />
      <div className='main'>
        <h2>Welcome to the chore site</h2>
        <p>{daysOfWeek[weekday]} the {dayNum}</p>
        <div className="premise">
          <p id="top">I made this because people kept moving people in the wrong places. This will move chores automatically so that it stays in order.</p>
          <p id='bottom'>Remember to do your chores even if you leave for the day 😁</p>
        </div>
      </div>

      <div className="current-kids-div">
        <div className="currentKids">
          <h2>Current Kids:</h2>
          <ul>{nameList}</ul>
        </div>
        <div className="buttons-div">
          <button onClick={() => setDailyRender(prev => !prev)} className="button">Dish/Daily Chores</button>
          
        </div>
      </div>

      {dailyRender && <DailyChores />}
      {!dailyRender && <DishChores />}
    </div>
  );
};

export default Home;
