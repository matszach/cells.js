class Cell extends _Entity {

    static RADIUS_MULTIPLIER = 0.04;
    static BASE_SIZE = 2;

    static #SPEED_COST_RATIO = 0.5;
    static #MAX_ENERGY_COST_RATIO = 0.2;
    static #SPLITREQ_COST_RATIO = 0.1;

    constructor(vertex, speed, maxEnergy, splitReq) {
        super(vertex, Cell.getRed(speed), Cell.getGreen(maxEnergy), Cell.getBlue(splitReq));
        this.speed = speed;
        this.maxEnergy = maxEnergy
        this.currEnergy = maxEnergy/2;
        this.splitReq = splitReq;
    }

    static getRed(speed) {
        return 255 * (speed - CellFactory.MIN_SPEED)/(CellFactory.MAX_SPEED - CellFactory.MIN_SPEED);
    }

    static getGreen(maxEnergy) {
        return 255 * (maxEnergy - CellFactory.MIN_MAXENERGY)/(CellFactory.MAX_MAXENERGY - CellFactory.MIN_MAXENERGY);
    }

    static getBlue(splitReq) {
        return 255 * (splitReq - CellFactory.MIN_SPLITREQ)/(CellFactory.MAX_SPLITREQ - CellFactory.MIN_SPLITREQ);
    }

    toCircle() {
        return this.pos.toCircle(this.currEnergy * Cell.RADIUS_MULTIPLIER + Cell.BASE_SIZE);
    }

    shouldSplit() {
        return this.currEnergy > this.splitReq;
    }

    payUpkeep() {
        let speedCost = this.speed / CellFactory.MAX_SPEED * Cell.#SPEED_COST_RATIO;
        let maxEnergyCost = this.maxEnergy / CellFactory.MAX_MAXENERGY * Cell.#MAX_ENERGY_COST_RATIO;
        let splitReqCost = this.splitReq / CellFactory.MAX_SPLITREQ * Cell.#SPLITREQ_COST_RATIO;
        this.currEnergy -= (speedCost + maxEnergyCost + splitReqCost);
    }

}