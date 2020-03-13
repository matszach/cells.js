class Food extends _Entity {

    static #MAX_VALUE = 50;
    static #GROWTH_RATE = 0.01;
    static #RADIUS_MULTIPLIER = 0.1;

    constructor(vertex, r, g, b, value) {
        super(vertex, r, g, b);
        this.value = value;
    }

    grow() {
        if(this.value < Food.#MAX_VALUE) {
            this.value += Food.#GROWTH_RATE;
        }
    }

    toCircle() {
        return this.pos.toCircle(this.value * Food.#RADIUS_MULTIPLIER);
    }
}