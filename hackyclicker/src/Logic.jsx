import Upgrade from './Upgrade.jsx';
class Logic {
    constructor() {
        this.points = 0;
        this.multiplier = 1;
        this.upgrades = [new Upgrade("Upgrade1", 1, 20, 10), new Upgrade("Upgrade2", 1, 200, 100),];
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

    getPoints() {
        return this.points;
    }

    getMultiplier() {
        return this.multiplier;
    }
}

export default Logic;