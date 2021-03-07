import FruitImages from './FruitImages'
import TipsData from './TipsData'

function Fruitbowl(props) {
  let tips = TipsData.tips
   
  
  return (
    <div>
      <header className='App-header'>fruitbowl</header>
        <FruitImages tips={tips}/>
    </div>
      
  );
}

export default Fruitbowl;