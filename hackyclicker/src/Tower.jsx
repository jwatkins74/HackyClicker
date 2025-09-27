class Tower {
    constructor(name, DPS, cost, requirement) {
        this.name = name;
        this.amount = 0;
        this.DPS = DPS;
        this.cost = cost;
        this.requirement = requirement;
    }

    buyTower() {
        this.amount += 1;
        //logarithmic cost increase (later)
        this.cost *= 2;
    }
    
    getDPS() {
        return this.DPS*this.amount;
    }

    getCost() {
        return this.cost;
    }

    getRequirement() {
        return this.requirement;
    }

    getAmount() {
        return this.amount;
    }

}

export default Tower;