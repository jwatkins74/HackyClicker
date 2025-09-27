
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

  return (
    <>
    <div id = "yessy">
      <h1>HackyClicker</h1>
      <div id = "container">
        <div id = "left">
        </div>
      <div id ="middle">
        <button onClick={handleBearClick}>
          You have {points} Coder Points!
        </button>
        {upgrades.map((upgrade) => (
          <button key={upgrade.name} onClick={() => handleUpgradeClick(upgrade.name)}>
            {upgrade.name}
          </button>
        ))}
      </div>
        <div id = "right"></div>
    </div>
    </div>
    </>
  );
}

export default App
