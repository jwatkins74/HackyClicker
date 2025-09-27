
import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Logic from './Logic.jsx';


function App() {
  const [count, setCount] = useState(0)
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
      <h1>HackyClicker</h1>
      <div className="card">
        <button onClick={handleBearClick}>
          You have {points} Coder Points!
        </button>
        {upgrades.map((upgrade) => (
          <button key={upgrade.name} onClick={() => handleUpgradeClick(upgrade.name)}>
            {upgrade.name}
          </button>
        ))}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
