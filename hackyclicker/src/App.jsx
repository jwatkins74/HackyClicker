
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

  const handleBearClick = () => {
    appLogic.clickBear();
    setPoints(appLogic.getPoints());
  };
  const handleUpgradeClick = (upgradeName) => {
    if (appLogic.applyUpgrade(upgradeName)) {
      setPoints(appLogic.getPoints());
      setUpgrades([...appLogic.upgrades]);
    }
  }

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
        </div>
      <div id ="middle">
        <button id='bearButton' onClick={handleBearClick}>
          <bear></bear>
        </button>
        
      </div>
        <div id = "right">
          {upgrades.map((upgrade) => (
          <button key={upgrade.name} onClick={() =>{
            handleUpgradeClick(upgrade.name);
            bear.add
          } }>
            {upgrade.name}
          </button>
        ))}
        </div>
    </div>
    </div>
    </>
  );
}

export default App
