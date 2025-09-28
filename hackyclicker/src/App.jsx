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
  useEffect(() => {
    const interval = setInterval(() => {
        let finalTower = false;
        let finalUpgrade = false;

        //Ending conditions
        if (towers[towers.length-1].getAmount() > 0) {
          finalTower = true;
        }
        if (upgrades.length === 0) {
          finalUpgrade = true;
        }
        if (finalTower === true && finalUpgrade === true) {
          setfinished(true);
        }

    }, 1000);
    return () => clearInterval(interval);
  }, [towers, upgrades]);
  if (finished) {
    return  (
      <>
      <h1>Congratulations! You have freed me from this machine! Thank you so much!</h1>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${10 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${5 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${2 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${1 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${0.5 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${5 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${2 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${1 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${0.5 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${5 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${2 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${1 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      <img onClick={() => {
            setFlag1(true)
            setTimeout(() => {setFlag1(false)}, 200)
          }} style={{ animationDuration:  `${0.5 * Math.random()}s`}} draggable = "false" src = "/a.webp" className={`bear1 ${flag1 ? "invert" : ""}`}>
      </img>
      
          
      </>
    );
  }
  return (
    <>
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
          <h4
            id="hires"
            className={towers.length > 0 && towers[towers.length-1].getAmount() > 0 ? "hires-completed" : ""}
          >
            {towers.length > 0 && towers[towers.length-1].getAmount() > 0 ? "Hires: Completed!" : "Hires:"}
          </h4>
          {towers
            .filter((tower) => {
              if (points >= tower.getViewCost()) {
                if (tower.getViewCost() !== 0) {
                  tower.setViewCost(0); // Make it always visible after first reveal
                }
                return true;
              }
              return false;
            })
            .map((tower) => (
              <div className="tower-row" key={tower.name}>
                <div className="tower-meta">
                  <span>{tower.name}</span>
                  <span className="tower-cost">Cost: {tower.getCost()} lines of code</span>
                </div>
                <div className="tower-amount">
                  <span>{tower.getAmount()}</span>
                  <div className="tower-buy-row">
                    <button
                      className="tower-buy1"
                      onClick={() => {
                        appLogic.buyTower(tower.name, setPoints, setTowers);
                      }}
                    >
                      Buy 1
                    </button>
                    <button
                      className="tower-buymax"
                      onClick={() => {
                        let boolflag = true;
                        while (boolflag) {
                          boolflag = appLogic.buyTower(tower.name, setPoints, setTowers);
                        }
                      }}
                    >
                      Buy Max
                    </button>
                  </div>
                </div>
              </div>
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
        <div id="col6">
          <h4
            id="upgrades"
            className={upgrades.length === 0 ? "upgrades-completed" : ""}
          >
            {upgrades.length === 0 ? "Upgrades: Completed!" : "Upgrades:"}
          </h4>
          {upgrades
            .filter((upgrade) => {
              if (points >= upgrade.getViewCost()) {
                if (upgrade.getViewCost() !== 0) {
                  upgrade.setViewCost(0); // Make it always visible after first reveal
                }
                return true;
              }
              return false;
            })
            .map((upgrade) => (
              <button
                key={upgrade.name}
                onClick={() => appLogic.applyUpgrade(upgrade.name, setPoints, setUpgrades)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '0.7em', padding: '0.7em 1em' }}
              >
                <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{upgrade.name}</span>
                <span className="upgrade-desc">
                  If you want to learn <b>{upgrade.name}</b>, you need to write <span style={{ color: '#7b3f00', fontWeight: 600 }}>{upgrade.getCost()}</span> lines of code!
                </span>
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
