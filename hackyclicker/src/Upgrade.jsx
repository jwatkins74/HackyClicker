class Upgrade {
    constructor(name, multValue, cost, requirement) {
        this.name = name;
        this.multValue = multValue;
        this.cost = cost;
        this.requirement = requirement;
    }
    
    getMultVal() {
        return this.multValue;
    }

    getCost() {
        return this.cost;
    }

    getRequirement() {
        return this.requirement;
    }

}

export default Upgrade;