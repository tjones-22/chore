import { useState } from "react";

//import {useGetDay} from "./useGetDay"

const Welcome = () => {

//const {dayNum, weekday, daysOfWeek}  = useGetDay();
const time = new Date();
    const [dayNum, setDayNum] = useState(time.getDate());
    const [weekday, setWeekDay] = useState(time.getDay());
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    setInterval( () =>{
        setDayNum(time.getDate());
        setWeekDay(time.getDay());
    
    },1000);
return (
    <div className='main'>
        <h2>Welcome to the chore site</h2>
        <p>{daysOfWeek[weekday]} the {dayNum}</p>
        <div className="premise">
            <p id="top"> I made this because people kept moving people in the wrong places. This will move chores automatically so that it stays in order.</p>
            <p id='bottom'> Remmeber to do your chores even if you leave for the day 😁</p>
        </div>
    </div>
);
}

export default Welcome;
