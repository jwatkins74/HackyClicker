
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
  const [upgrades, setUpgrades] = useState(appLogic.upgrades);
  const [towers, setTowers] = useState(appLogic.towers);


  let bear = document.createElement("img");
  bear.src = "/a.webp";
  bear.id = "bear";

  return (
    <>
    <div id = "yessy">
      <h1>HackyClicker</h1>
      <h2>You have {points} Coder Points!</h2>
      <div id = "container">
        <div id = "left">
          {towers
              .filter((tower) => points >= (tower.getRequirement()))
              .map((tower) => (
                <button key={tower.name} onClick={() => appLogic.addTower(tower.name, setPoints, setTowers)}>
                  {tower.name}, {tower.getCost()}, {tower.getAmount()}
                </button>
              ))}
        </div>
      <div id ="middle">
        <button id='bearButton' onClick={() => appLogic.clickBear(setPoints)}>
          <img id='bear' draggable = "false" src = "/a.webp"></img>
        </button>
      </div>
        <div id = "right">
            {upgrades
              .filter((upgrade) => points >= (upgrade.getRequirement()))
              .map((upgrade) => (
                <button key={upgrade.name} onClick={() => appLogic.applyUpgrade(upgrade.name, setPoints, setUpgrades)}>
                  {upgrade.name}, {upgrade.getCost()}
                </button>
              ))}
        </div>
    </div>
    </div>
    </>
  );
}

export default App
