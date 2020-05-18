export class AsteroidPosition {

    public positionsXY: Array<{ x: number, y: number }>

    constructor(positionsXY = [{ x: 0, y: 0 }]) {
        this.positionsXY = positionsXY
    }
} 