class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%, ${l}%)`;
    }

    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%, ${l}%)`;
    }

    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h},100%, ${l}%)`;
    }

    calcHSL() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s
            ? l === r
                ? (g - b) / s
                : l === g
                    ? 2 + (b - r) / s
                    : 4 + (r - g) / s
            : 0;
        this.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
        this.s = 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0);
        this.l = (100 * (2 * l - s)) / 2;
    }

}

const c1 = new Color(255, 67, 89, 'tomato');
console.log(c1.hex());
console.log(c1.rgb());
console.log(c1.rgba(0.5));
console.log(c1.name);
console.log(c1);

document.body.style.backgroundColor = c1.opposite();