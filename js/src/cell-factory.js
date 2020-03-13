class CellFactory extends _EntityFactory {

    static MIN_SPEED = 0.05;
    static MAX_SPEED = 2;
    static MIN_MAXENERGY = 200;
    static MAX_MAXENERGY = 2000;
    static MIN_SPLITREQ = 100;
    static MAX_SPLITREQ = 1000;

    static #MIN_MUTATION = 0.95;
    static #MAX_MUTATION = 1.05;

    #getMutation = () => {
        return Gmt.randFloat(CellFactory.#MIN_MUTATION, CellFactory.#MAX_MUTATION);
    }
    
    #getNearbyPos = (cell) => {
        let range = Cell.RADIUS_MULTIPLIER * cell.currEnergy;
        return new Gmt.Vertex(
            cell.pos.x + Gmt.randFloat(-range, range), 
            cell.pos.y + Gmt.randFloat(-range, range)
        );
    }

    createRandom() {
        let pos = this.positionGen.next().value;
        let speed = Gmt.randFloat(CellFactory.MIN_SPEED, CellFactory.MAX_SPEED);
        let maxEnergy = Gmt.randFloat(CellFactory.MIN_MAXENERGY, CellFactory.MAX_MAXENERGY);
        let splitReq = Gmt.randFloat(CellFactory.MIN_SPLITREQ, CellFactory.MAX_SPLITREQ);
        return new Cell(pos, speed, maxEnergy, splitReq);
    }

    createFromCell(cell) {
        let pos = this.#getNearbyPos(cell);
        let speed = Gmt.clamp(cell.speed * this.#getMutation(), CellFactory.MIN_SPEED, CellFactory.MAX_SPEED);
        let maxEnergy = Gmt.clamp(cell.maxEnergy * this.#getMutation(), CellFactory.MIN_MAXENERGY, CellFactory.MAX_MAXENERGY);
        let splitReq = Gmt.clamp(cell.splitReq * this.#getMutation(), CellFactory.MIN_SPLITREQ, CellFactory.MAX_SPLITREQ);
        return new Cell(pos, speed, maxEnergy, splitReq);
    }

}