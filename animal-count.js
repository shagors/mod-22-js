function animalCount(miles){
    const animalDensityF10M = 10;
    const animalDensityS10M = 50;
    const animalDensityRestM = 100;
    if(miles <= 10){
        const count = miles * animalDensityF10M;
        return count;
    }
    else if(miles <= 20){
        const firstDensAnimals = 10 * animalDensityF10M;
        const restMiles = miles - 10;
        const secondDensAnimals = restMiles * animalDensityS10M;
        const totalAnimals = firstDensAnimals + secondDensAnimals;
        return totalAnimals;
    }
    else{
        const firstDensAnimals = 10 * animalDensityF10M;
        const secondDensAnimals = 10 * animalDensityS10M;
        const restMiles = miles - 20;
        const restDensAnimals = restMiles * animalDensityRestM;
        const totalAnimals = firstDensAnimals + secondDensAnimals + restDensAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(5);
console.log(animals);