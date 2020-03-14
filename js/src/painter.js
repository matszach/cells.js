class Painter {

    constructor(canvasWrapper) {
        this.cw = canvasWrapper;
        this.infoBox = new Gmt.Rectangle(5, 5, 150, 100);
        this.infoBoxColorFill = Gmt.rgba(30, 50, 30, 0.15);
        this.infoBoxColorStroke = Gmt.rgba(30, 50, 30, 0.3);
        this.textColor = Gmt.rgba(255, 255, 255, 0.5);
    }

    clear() {
        this.cw.clear();
    }

    drawInfo(loop, foodRegistry, cellRegistry) {
        this.cw.drawRect(this.infoBox, this.infoBoxColorFill, this.infoBoxColorStroke, 2);
        this.cw.write(`FPS : ${Math.round(loop.getFPS())}`, 15, 30, this.textColor, 20);
        this.cw.write(`FOOD : ${Math.round(foodRegistry.entities.length)}`, 15, 60, this.textColor, 20);
        this.cw.write(`CELLS : ${Math.round(cellRegistry.entities.length)}`, 15, 90, this.textColor, 20);
    }

    drawCell(c) {
        this.cw.drawCircle(c.toCircle(), c.colorFill, c.colorStroke, 4);
    }

    drawCells(cellArray) {
        cellArray.forEach(c => this.drawCell(c));
    }

    drawFood(f) {
        this.cw.fillCircle(f.toCircle(), f.colorFill);
    }

    drawFoods(foodArray) {
        foodArray.forEach(f => this.drawFood(f));
    }

}