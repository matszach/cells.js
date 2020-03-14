class _Entity {

    constructor(vertex, r, g, b) {
        this.pos = vertex;
        this.colorFill = Gmt.rgba(r, g, b, 0.2);
        this.colorStroke = Gmt.rgba(r, g, b, 0.5);
        this.expired = false;
    }

    toCircle() {
        // abstract1
    }
}