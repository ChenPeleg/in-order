export class AsteroidPosition {
    public xValues: Array<number>;
    public yValues: Array<number>;

    constructor(yValues: Array<number>, xValues: Array<number>) {
        this.yValues = yValues;
        this.xValues = xValues;
    }
} 