export class Asteroid {
    public left: number;
    public bottom: number;
    public text: string;
    public index: number;
    public destroy: boolean;
    public warm?: boolean;
    public explode?: boolean;
    public removed?: boolean;
    constructor(left: number, bottom: number, text: string, index: number, destroy: boolean, warm?: boolean, removed?: boolean) {
        this.left = left;
        this.bottom = bottom;
        this.text = text;
        this.index = index;
        this.destroy = false;
        this.warm = false;
        this.explode = false;
        this.removed = false;

    }
} 