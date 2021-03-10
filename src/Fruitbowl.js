import FruitImages from './FruitImages'
import TipsData from './TipsData'

function Fruitbowl(props) {
  let tips = TipsData.tips
   
  return (
    <div className="home-page">
      <header className='App-header'>fruitbowl</header>
      <div className="fruitsnbowl">
        <FruitImages tips={tips}/>
      </div>
    </div>
  );
}
export default Fruitbowl;