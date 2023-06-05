/*
Daniel Woods
CIT 281 p6
*/

class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }

  static sides = [];

  static setSides(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.length === 1
      ? this.sides[0]
      : this.sides.reduce((sum, side) => sum + side, 0);
  }
  toString() {
    return this.sides.toString();
  }
}

console.log(new Shape([5, 10]).perimeter()); // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }

  toString() {
    if (this.length === this.width) {
      return `Square with sides ${[
        this.length,
        this.width,
      ].toString()} has a perimeter of ${this.perimeter()} and area of ${this.area()}`;
    } else {
      return `Rectangle with sides ${[
        this.length,
        this.width,
      ].toString()} has a perimeter of ${this.perimeter()} and area of ${this.area()}`;
    }
  }
}

console.log(new Rectangle(4, 4).perimeter()); // 16
console.log(new Rectangle(4, 4).area()); // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area() {
    const semiP = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      semiP * (semiP - this.sideA) * (semiP - this.sideB) * (semiP - this.sideC)
    );
    return area;
  }

  toString() {
    return `Triangle with sides ${[
      this.sideA,
      this.sideB,
      this.sideC,
    ].toString()} has perimeter of ${this.perimeter()} and area of ${this.area()}`;
  }
}

console.log(new Triangle(3, 4, 5).perimeter()); // 12
console.log(new Triangle(3, 4, 5).area()); // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

for (const sides of data) {
  let shape = null;

  switch (sides.length) {
    case 1:
      shape = new Shape(sides);
      console.log(`Shape with 1 side unsupported`);
      break;
    case 2:
      shape = new Rectangle(...sides);
      console.log(shape.toString());
      break;
    case 3:
      shape = new Triangle(...sides);
      console.log(shape.toString());
      break;
    default:
      console.log(`Shape with 0 sides unsupported`)
      break;
  }
}

