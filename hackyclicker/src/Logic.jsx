import './Upgrade.jsx';
class Logic {
    constructor() {
        this.points = 0;
        this.multiplier = 1;
        this.upgrades = [{ name: "Upgrade1", getMultVal: 1 }];
    }

    clickBear() {
        this.points += this.multiplier;
        return this.points;
    }

    addUpgrade(upgrade) {
        this.upgrades.push(upgrade);
    }

    applyUpgrade(upgradeName) {
        const idx = this.upgrades.findIndex(u => u.name === upgradeName);
        if (idx !== -1) {
            const currUpgrade = this.upgrades.splice(idx, 1)[0];
            this.multiplier += currUpgrade.getMultVal;
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