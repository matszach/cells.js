
class CellRegistry extends _EntityRegistry {

    constructor(factory, foodRegistry) {
        super(factory);
        this.foodRegistry = foodRegistry;
    }

    init() {
        this.entities = [];
        Gmt.iter1D(St.Cell.nofInitial, () => this.spawnRandom());
    }

    spawnRandom() {
        this.add(this.factory.createRandom());
    }

    logicOnEntity(cell) {
        
        // upkeep
        cell.payUpkeep();
        if(cell.energy < 0) {
            cell.expired = true;

        // reproduction
        } else if(cell.shouldSplit()) {
            let newCell = this.factory.createFromCell(cell);
            cell.energy /= 2;
            newCell.energy = cell.energy;
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

            if(distToNearestFood < cell.getRadius()) {
                nearestFood.value -= cell.feedingRate;
                cell.energy = cell.energy + cell.feedingRate;
                if(nearestFood.value <= 0) {
                    nearestFood.value = 0;
                    nearestFood.expired = true;
                }

            } else {
                cell.pos.moveTowards(nearestFood.pos, cell.speed);
            }
        }
    }

}