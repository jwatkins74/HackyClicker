import Progression from './Progression.jsx';
class Logic {
    constructor() {
        this.points = 0;
        this.multiplier = 1;
        this.progression = new Progression();
    }

    clickBear(setPoints) {
        this.points += this.multiplier;
        setPoints(this.points);
    }

    applyUpgrade(upgradeName, setPoints, setUpgrades) {
        const upgrade = this.progression.findUpgradeByName(upgradeName);
        if (upgrade) {
            if (this.points < upgrade.getCost()) {
                return false;
            }
            this.multiplier += upgrade.getMultVal();
            this.points -= upgrade.getCost();
            // Remove upgrade from progression
            this.progression.upgrades = this.progression.upgrades.filter(u => u.name !== upgradeName);
            setPoints(this.getPoints());
            setUpgrades([...this.progression.getUpgrades()]);
            return true;
        }
        return false;
    }

    buyTower(towerName, setPoints, setTowers) {
        const tower = this.progression.findTowerByName(towerName);
        if (tower) {
            if (this.points < tower.getCost()) {
                return false;
            }
            if (tower.getAmount() === 0) {
                this.applyTower(tower, setPoints, setTowers);
            }
            this.points -= tower.getCost();
            tower.addTower();
            setPoints(this.getPoints());
            setTowers([...this.progression.getTowers()]);
            return true;
        }
        return false;
    }
    applyTower(tower, setPoints, setTowers) {
        setInterval(() => {
            this.points += tower.getDPS();
            setPoints(this.getPoints());
            setTowers([...this.progression.getTowers()]);
        }, 1000);
    }

    chatGPTIncrease(setTowers) {
        setInterval(() => {
            let chatGPT = this.progression.findTowerByName("ChatGPT");
            chatGPT.setCost(Math.round(chatGPT.getCost()+Math.log2(chatGPT.getCost())));
            setTowers([...this.progression.getTowers()]);
        }, 100);
    }

    getPoints() {
        return this.points;
    }

    getMultiplier() {
        return this.multiplier;
    }
}

export default Logic;