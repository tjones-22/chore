import '../CSS/chore-card.css'
import DailyButton from './DailyButton';
import DishButton from './DishChoresButton';
const CurrentKids = () => {
    let currentKids = ['Tristan','Brecka','Brynlee','Tyson','Brockton']
    const nameList = currentKids.map(name => <li>{name}</li>)
    return (
        <div className="current-kids-div">
            <div className="currentKids">
            <h2>Current Kids:</h2>
            <ul>
                {nameList}
            </ul>
            
        </div>
        <div className="buttons-div">
            <DailyButton />
            <DishButton />
        </div>
        
        </div>
        
      );
}
 
export default CurrentKids;