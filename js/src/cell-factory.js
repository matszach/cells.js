class CellFactory extends _EntityFactory {

    #getMutation = () => {
        return Gmt.randFloat(1 - St.Cell.mutationRate, 1 + St.Cell.mutationRate);
    }
    
    #getNearbyPos = (cell) => {
        let range = cell.getRadius();
        return new Gmt.Vertex(
            cell.pos.x + Gmt.randFloat(-range, range), 
            cell.pos.y + Gmt.randFloat(-range, range)
        );
    }

    createRandom() {
        let pos = this.positionGen.next().value;
        let speed = Gmt.randFloat(St.Cell.minSpeed, St.Cell.maxSpeed);
        let feedingRate = Gmt.randFloat(St.Cell.minFeedingRate, St.Cell.maxFeedingRate);
        let splitReq = Gmt.randFloat(St.Cell.minSplitReq, St.Cell.maxSplitReq);
        return new Cell(pos, speed, feedingRate, splitReq);
    }

    createFromCell(cell) {
        let pos = this.#getNearbyPos(cell);
        let speed = cell.speed * this.#getMutation();
        let feedingRate = cell.feedingRate * this.#getMutation();
        let splitReq = cell.splitReq * this.#getMutation();
        return new Cell(pos, speed, feedingRate, splitReq);
    }

}