class Upgrade {
    constructor(name, multValue, cost, viewCost) {
        this.name = name;
        this.multValue = multValue;
        this.cost = cost;
        this.viewCost = viewCost;
    }
    
    getMultVal() {
        return this.multValue;
    }

    getCost() {
        return this.cost;
    }

    getViewCost() {
        return this.viewCost;
    }

}

export default Upgrade;