export class AsteroidPosition {
    public xValues: Array<number>;
    public yValues: Array<number>;
    public positionsXY?: Array<{ x: number, y: number }>

    constructor(yValues: Array<number>, xValues: Array<number>, positionsXY = [{ x: 0, y: 0 }]) {
        this.yValues = yValues;
        this.xValues = xValues;
        this.positionsXY = positionsXY
    }
} 