class Painter {

    constructor(canvasWrapper) {
        this.cw = canvasWrapper;
        this.infoBox = new Gmt.Rectangle(10, 10, 150, 100);
        this.boxColorFill = Gmt.rgba(60, 30, 30, 0.2);
        this.boxColorStroke = Gmt.rgba(60, 30, 30, 0.6);
        this.textColor = Gmt.rgba(255, 255, 255, 0.5);
        this.foodHistory = [];
        this.foodHistoryColor = Gmt.rgba(0, 200, 100, 0.7);
        this.cellHistory = [];
        this.cellHistoryColor = Gmt.rgba(200, 100, 0, 0.7);
    }

    clear() {
        this.cw.clear();
    }

    drawInfo(loop, foodRegistry, cellRegistry) {
        this.cw.drawRect(this.infoBox, this.boxColorFill, this.boxColorStroke, 2);
        this.cw.write(`FPS : ${Math.round(loop.getFPS())}`, 20, 35, this.textColor, 20);
        this.cw.write(`FOOD : ${Math.round(foodRegistry.entities.length)}`, 20, 65, this.textColor, 20);
        this.cw.write(`CELLS : ${Math.round(cellRegistry.entities.length)}`, 20, 95, this.textColor, 20);
    }

    drawHistory(loop, foodRegistry, cellRegistry) {
        if(loop.getFrame() % St.Data.samplingRate == 0) {
            this.updateHistory(foodRegistry, cellRegistry);
        }
        
        let bounds = this.cw.getBoundingRect();
        let historyBox = new Gmt.Rectangle(
            10, bounds.height - 210, bounds.width - 20, 200 
        );
        this.cw.drawRect(historyBox, this.boxColorFill, this.boxColorStroke, 2);

        let spacing = (bounds.width - 40)/St.Data.samplesLimit;

        let foodHistoryLine = new Gmt.PolyLine();
        for(let i = 0; i < this.foodHistory.length; i++) {
            let x = 20 + i * spacing;
            let y = bounds.height - 10 - this.foodHistory[i]/5;
            foodHistoryLine.add(x, y);
        }
        if(foodHistoryLine.vertices.length > 1) {
            console.log(foodHistoryLine.vertices.length, foodHistoryLine.toSegments().length);
            this.cw.strokePolyLine(foodHistoryLine, this.foodHistoryColor, 5);
        }

        let cellHistoryLine = new Gmt.PolyLine();
        for(let i = 0; i < this.cellHistory.length; i++) {
            let x = 20 + i * spacing;
            let y = bounds.height - 10 - this.cellHistory[i]/5;
            cellHistoryLine.add(x, y);
        }
        if(cellHistoryLine.vertices.length > 1) {
            console.log(cellHistoryLine.vertices.length, cellHistoryLine.toSegments().length);
            this.cw.strokePolyLine(cellHistoryLine, this.cellHistoryColor, 5);
        }
    }

    updateHistory(foodRegistry, cellRegistry) {
        this.foodHistory.push(foodRegistry.entities.length);
        if(this.foodHistory.length > St.Data.samplesLimit) {
            this.foodHistory.splice(0, 1);
        }
        this.cellHistory.push(cellRegistry.entities.length);
        if(this.cellHistory.length > St.Data.samplesLimit) {
            this.cellHistory.splice(0, 1);
        }
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