type Point = {
    x: number;
    y: number;
};

class Shape {
    points:  Point[];

    constructor(points: Point[]) {
        this.points = points;
    }
    
}


class Triangle extends Shape {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);  // Call the parent class constructor
        this.breed = breed;
    }

    bark(): void {
        console.log("Woof! Woof!");
    }

    // Overriding the move method from the parent class
    move(distance: number = 10): void {
        console.log(`${this.name}, the ${this.breed}, runs ${distance} meters.`);
    }
}

// Usage example:
const dog = new Dog("Buddy", "Golden Retriever");
dog.bark();  // Output: Woof! Woof!
dog.move();  // Output: Buddy, the Golden Retriever, runs 10 meters.