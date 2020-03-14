class Cell extends _Entity {

    constructor(vertex, speed, feedingRate, splitReq) {
        super(vertex, Cell.getRed(speed), Cell.getGreen(feedingRate), Cell.getBlue(splitReq));
        this.speed = speed;
        this.feedingRate = feedingRate;
        this.splitReq = splitReq;
        this.energy = splitReq/2;
    }

    static getRed(speed) {
        return 255 * (speed - St.Cell.minSpeed)/( St.Cell.maxSpeed -  St.Cell.minSpeed);
    }

    static getGreen(feedingRate) {
        return 255 * (feedingRate - St.Cell.minFeedingRate)/( St.Cell.maxFeedingRate -  St.Cell.minFeedingRate);
    }

    static getBlue(splitReq) {
        return 255 * (splitReq - St.Cell.minSplitReq)/( St.Cell.maxSplitReq -  St.Cell.minSplitReq);
    }

    getRadius() {
        return this.energy * St.Cell.radiusMod;
    }

    toCircle() {
        return this.pos.toCircle(this.getRadius());
    }

    shouldSplit() {
        return this.energy > this.splitReq;
    }

    payUpkeep() {
        let speedCost = this.speed / St.Cell.maxSpeed * St.Cell.speedUpkeep;
        let feedingRateCost = this.feedingRate / St.Cell.maxFeedingRate * St.Cell.feedingRateUpkeep;
        let splitReqCost = this.splitReq / St.Cell.maxSplitReq * St.Cell.splitReqUpkeep;
        this.energy -= (speedCost + feedingRateCost + splitReqCost);
        this.energy = this.energy < 0 ? 0 : this.energy;
    }

}