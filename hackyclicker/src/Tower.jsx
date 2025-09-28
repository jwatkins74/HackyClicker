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
        this.cost += Math.round(this.cost/7);
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

    setCost(newCost) {
        this.cost = newCost;
    }   

    setViewCost(newViewCost) {
        this.viewCost = newViewCost;
    }

}

export default Tower;