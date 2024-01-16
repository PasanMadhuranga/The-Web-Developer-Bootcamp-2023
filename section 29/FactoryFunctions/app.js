function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function () {
        const { r, g, b } = this;
        return ("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }

    return color;
}

const pink = makeColor(255, 192, 203);
console.log(pink.rgb());
console.log(pink.hex());

// This approach is not very efficient because we are creating a new function for every color we create.