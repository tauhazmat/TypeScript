let userName:string;

let user: string | number = 'Tauha';
user = 2;

let fruits: string[] = ['apple', 'banana', 'orange'];



// type Car = string | number;

type Car = {
    name: string,
    model: number,
    varient: string,
    isAutomatic: boolean,
    features: string[],
    launchedYear?: number,
    calculateFuelAvg?: (fuel: number, distance: number) => void
}

let car: Car = {
    name: 'Alto',
    model: 2007,
    varient: 'boss',
    isAutomatic: true,
    features: ['fast', 'good-fuel-avg'],
    launchedYear: 2000
}

car.calculateFuelAvg = (fuel, distance) => {
    console.log(distance/fuel);
}

car.calculateFuelAvg(20, 400);


interface animal {}