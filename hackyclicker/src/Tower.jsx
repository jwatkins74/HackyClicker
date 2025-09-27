class Tower {
    constructor(name, DPS, cost, viewCost) {
        this.name = name;
        this.amount = 0;
        this.DPS = DPS;
        this.cost = cost;
        this.viewCost = viewCost;
    }

    addTower() {
        this.amount += 1;
        //logarithmic cost increase (later)
        this.cost += Math.round(Math.sqrt(this.cost));
    }
    
    getDPS() {
        return this.DPS*this.amount;
    }

    getCost() {
        return this.cost;
    }

    getViewCost() {
        return this.viewCost;
    }

    getAmount() {
        return this.amount;
    }

}

export default Tower;