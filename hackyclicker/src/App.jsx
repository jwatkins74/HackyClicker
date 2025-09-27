
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


  return (
    <>
    <div id = "yessy">
      <h1>HackyClicker</h1>
      <div id = "container">
        <div id = "left">
        </div>
      <div id ="middle">
        <button onClick={() => appLogic.clickBear(setPoints)}>
          You have {points} Coder Points!
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
