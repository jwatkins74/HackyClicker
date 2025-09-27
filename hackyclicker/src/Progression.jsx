import Tower from './Tower.jsx';
import Upgrade from './Upgrade.jsx';
import { upgrades as upgradeData, towers as towerData } from './progressionData.js';

class Progression {
    constructor() {
    this.towers = towerData.map(t => new Tower(t.name, t.dps, t.cost, t.viewCost));
    this.upgrades = upgradeData.map(u => new Upgrade(u.name, u.multValue, u.cost, u.viewCost));
    }

    addTower({name, DPS, cost, viewCost}) {
        const tower = new Tower({ name, cost, DPS, viewCost });
        this.towers.push(tower);
        return tower;
    }

    addUpgrade({name, multValue, cost, viewCost}) {
        const upgrade = new Upgrade({name, multValue, cost, viewCost});
        this.upgrades.push(upgrade);
        return upgrade;
    }

    getTowers() {
        return this.towers;
    }

    getUpgrades() {
        return this.upgrades;
    }

    findTowerByName(name) {
        return this.towers.find(tower => tower.name === name);
    }

    findUpgradeByName(name) {
        return this.upgrades.find(upgrade => upgrade.name === name);
    }

}

export default Progression;