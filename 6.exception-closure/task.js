function parseCount(value) {
    let number = Number.parseFloat(value);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        if (x + y < z || y + z < x || z + x < y) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.x + this.y + this.z;
    }

    get area() {
        let p = this.perimeter / 2;
        return Number((Math.sqrt(p * ((p - this.x) * (p - this.y) * (p - this.z)))).toFixed(3));
    }
}

function getTriangle(x, y, z) {
    try {
        return new Triangle(x, y, z);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },

            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
}