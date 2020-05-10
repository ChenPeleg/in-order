export class Asteroid {
    public left: number;
    public bottom: number;
    public text: string;
    public index: number;
    constructor(left: number, bottom: number, text: string, index: number) {
        this.left = left;
        this.bottom = bottom;
        this.text = text;
        this.index = index;
    }
} 