
const Welcome = () => {
const time = new Date();
let dayNum = time.getDate();
let weekday = time.getDay();
const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

return (
    <div className='main'>
        <h2>Welcome to the chore site</h2>
        <p>{daysOfWeek[weekday]} the {dayNum}</p>
        <div className="premise">
            <p id="top"> I made this because people kept movine it in the wrong places. This will move chores automatically so that it stays in order.</p>
            <p id='bottom'> Remmeber to do your chores evemn if you leave for the day 😁</p>
        </div>
    </div>
);
}

export default Welcome;
