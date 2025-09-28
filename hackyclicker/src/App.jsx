
import { useState, useRef } from 'react';
import './App.css';
import Logic from './Logic.jsx';

function App() {
  // Use useRef to persist Logic instance across renders
  const logicRef = useRef(null);
  if (!logicRef.current) {
    logicRef.current = new Logic();
  }
  const appLogic = logicRef.current;

  // React state to trigger re-render on points change
  const [points, setPoints] = useState(appLogic.getPoints());
  const [upgrades, setUpgrades] = useState(appLogic.progression.upgrades);
  const [towers, setTowers] = useState(appLogic.progression.towers);

  const [flag1, setFlag1] = useState(false);
  const [speed, setSpeed] = useState(100);

  return (
    <>
    <div id = "yessy">
      <div id ="head">
        <div>
          <h1>HackyClicker</h1>
      <h2>You have {points} Coder Points!</h2>
        </div>
        
      </div>
      
      <div id = "container">
        <div id ="col1">
          </div>
        <div id = "col2">
          {towers
              .filter((tower) => points >= (tower.getViewCost()))
              .map((tower) => (
                <button key={tower.name} onClick={() => appLogic.buyTower(tower.name, setPoints, setTowers)}>
                  {tower.name}, {tower.getCost()}, {tower.getAmount()}
                </button>
              ))}
        </div>
        <div id ="col3">
          </div>
        <div id ="col4">
          <button id='bearButton' onClick={() => {appLogic.clickBear(setPoints)
          setFlag1(true)
          setTimeout(() => {setFlag1(false)}, 200)
          }}>
            <img id='bear'style={{ animationDuration: `${ speed}s` }} draggable = "false" src = "/a.webp" className={flag1 ? "invert": ""}></img>
          </button>
        </div>
        <div id ="col5">
        </div>
        <div id = "col6">
            {upgrades
              .filter((upgrade) => points >= (upgrade.getViewCost()))
              .map((upgrade) => (
                <button key={upgrade.name} onClick={() => appLogic.applyUpgrade(upgrade.name, setPoints, setUpgrades)}>
                  {upgrade.name}, {upgrade.getCost()}
                </button>
              ))}
        </div>
        <div id ="col7">
          </div>
      </div>
    </div>
    </>
  );
}

export default App
