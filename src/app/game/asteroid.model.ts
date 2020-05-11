export class Asteroid {
    public left: number;
    public bottom: number;
    public text: string;
    public index: number;
    public destroy: boolean;
    public hot?: boolean;
    constructor(left: number, bottom: number, text: string, index: number, destroy: boolean) {
        this.left = left;
        this.bottom = bottom;
        this.text = text;
        this.index = index;
        this.destroy = false;
        this.hot = false;

    }
} 