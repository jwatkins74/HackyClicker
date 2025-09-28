import { useState, useRef, useEffect, } from 'react';
import './App.css';
import Logic from './Logic.jsx';

function App() {
  const logicRef = useRef(null);
  if (!logicRef.current) {
    logicRef.current = new Logic();
  }
  const appLogic = logicRef.current;

  const [points, setPoints] = useState(appLogic.getPoints());
  const [upgrades, setUpgrades] = useState(appLogic.progression.upgrades);
  const [towers, setTowers] = useState(appLogic.progression.towers);
  const [finished, setfinished] = useState(false);
  const [flag1, setFlag1] = useState(false);
   const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      
      if(points >= 10000) return;
      const newSpeed = 10000 / points;
      if (newSpeed < speed) {
        setSpeed(newSpeed);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [points, speed]);
  if (finished) {
    return (<h1>Congratulations! You have freed me from this machine! Thank you so much!</h1>);
  }
  return (
    <>
    <audio src="/baby.wav"></audio>
    <div id = "yessy">
      <div id ="head">
        <div>
          <h1>HackyClicker</h1>
      <h2>You have {points} lines of code!</h2>
        </div>
        
      </div>
      
      <div id = "container">
        <div id ="col1">
          </div>
        <div id = "col2">
          <h4 id = "hires"> Hires: </h4>
          {towers
              .filter((tower) => points >= (tower.getViewCost()))
              .map((tower) => (
                <button key={tower.name} onClick={() => appLogic.buyTower(tower.name, setPoints, setTowers)}>
                  {tower.name}, {tower.getCost()}, {tower.getAmount()}
                  <button onClick={() => {
                    let boolflag = true
                    while(boolflag){
                      boolflag = appLogic.buyTower(tower.name, setPoints, setTowers) }
                    }}>Buy Max</button>
                </button>
              ))}
        </div>
        <div id ="col3">
          </div>
        <div id="col4">
          {!start && (
            <div className="intro-message">
              <h4>Please help free me from this machine! To free me, you need 100,000 lines of code written! Upgrade you abilities and hire some help.</h4>
            </div>
          )}
          <button className='bearButton' onClick={() => {appLogic.clickBear(setPoints)
            
            setFlag1(true)
            setStart(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }}>
            <img style={{ animationDuration: `${ speed}s` }} draggable = "false" src = "/a.webp" className={`bear ${flag1 ? "invert" : ""}`}></img>
          </button>
          <div>
            <button onClick={() => {
              const gamble = Math.random();
              if (gamble >= 0.5) {
                appLogic.points *= 2;
              } else { appLogic.points *= 0; }
              setPoints(appLogic.getPoints());
            }}> GAMMMMBLLEEE (Double or Nothing)</button>
          </div>
        </div>
        <div id ="col5">
        </div>
        <div id = "col6">
          <h4 id = "upgrades"> Upgrades: </h4>
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
