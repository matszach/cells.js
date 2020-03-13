
class CellRegistry extends _EntityRegistry {

    static #INITIAL_CELLS = 20;

    constructor(factory, foodRegistry) {
        super(factory);
        this.foodRegistry = foodRegistry;
    }

    init() {
        Gmt.iter1D(CellRegistry.#INITIAL_CELLS, () => this.spawnRandom());
    }

    spawnRandom() {
        this.add(this.factory.createRandom());
    }

    logicOnEntity(cell) {

        // upkeep
        cell.payUpkeep();
        if(cell.currEnergy < 0) {
            cell.expired = true;

        // reproduction
        } else if(cell.shouldSplit()) {
            let newCell = this.factory.createFromCell(cell);
            cell.currEnergy /= 2;
            newCell.currEnergy = cell.currEnergy;
            this.add(newCell);
        
        // feeding
        } else {
            let distToNearestFood = Infinity;
            let nearestFood = null;

            this.foodRegistry.entities.forEach(f => {
                let d = cell.pos.distanceTo(f.pos);
                if(d < distToNearestFood) {
                    distToNearestFood = d;
                    nearestFood = f;
                }
            });

            if(distToNearestFood < Cell.RADIUS_MULTIPLIER * cell.currEnergy) {
                cell.currEnergy = Gmt.clamp(cell.currEnergy + nearestFood.value, 0, cell.maxEnergy);
                nearestFood.expired = true;
            } else {
                cell.pos.moveTowards(nearestFood.pos, cell.speed);
            }
        }
    }

}