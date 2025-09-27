import Upgrade from './Upgrade.jsx';
import Tower from './Tower.jsx';
class Logic {
    constructor() {
        this.points = 0;
        this.multiplier = 1;
        this.upgrades = [new Upgrade("Upgrade1", 1, 20, 10), new Upgrade("Upgrade2", 1, 200, 100),];
        this.towers = [new Tower("Tower1", 1, 20, 0), new Tower("Tower2", 5, 100, 10)];
    }

    clickBear(setPoints) {
        this.points += this.multiplier;
        setPoints(this.points);
    }

    addUpgrade(upgrade) {
        this.upgrades.push(upgrade);
    }

    applyUpgrade(upgradeName, setPoints, setUpgrades) {
        const idx = this.upgrades.findIndex(u => u.name === upgradeName);
        if (idx !== -1) {
            if (this.points < this.upgrades[idx].getCost()) {
                return false;
            }
            const currUpgrade = this.upgrades.splice(idx, 1)[0];
            this.multiplier += currUpgrade.getMultVal();
            this.points -= currUpgrade.getCost();
            setPoints(this.getPoints());
            setUpgrades([...this.upgrades]);
            return true;
        }
        return false;
    }

    addTower(towerName, setPoints, setTowers) {
        const idx = this.towers.findIndex(t => t.name === towerName);
        if (idx !== -1) {
            if (this.points < this.towers[idx].getCost()) {
                return false;
            }
            const currTower = this.towers[idx];
            if (currTower.getAmount() === 0) {
                this.applyTower(currTower, setPoints, setTowers);
            }
            this.points -= currTower.getCost();
            currTower.buyTower();
            setPoints(this.getPoints());
            setTowers([...this.towers]);
            return true;
        }
        return false;
    }
    applyTower(tower, setPoints, setTowers) {
        setInterval(() => {
            this.points += tower.getDPS();
            setPoints(this.getPoints());
            setTowers([...this.towers]);
        }, 1000);
    }

    getPoints() {
        return this.points;
    }

    getMultiplier() {
        return this.multiplier;
    }
}

export default Logic;