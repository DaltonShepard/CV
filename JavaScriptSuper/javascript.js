const superHeroes = [
    { name: 'Superman', power: 100, universe: 'DC' },
{ name: 'CaptainAmerica', power: 93, universe: 'Marvel' },
{ name: 'Batman', power: 75, universe: 'DC' },
{ name: 'BlackWidow', power: 78 , universe: 'Marvel' },
{ name: 'DrStrange', power: 91 , universe: 'Marvel' },
{ name: 'Spiderman', power: 90, universe: 'Marvel' },
{ name: 'Ironman', power: 88, universe: 'Marvel' },
{ name: 'WonderWoman', power: 92, universe: 'DC' },
{ name: 'BlackPanther', power: 87 , universe: 'Marvel' },
{ name: 'Flash', power: 80, universe: 'DC' },
{ name: 'Hulk', power: 83, universe: 'Marvel' },
{ name: 'Thor', power: 95, universe: 'Marvel' }
]

function getSuperHeroes(superHeroes) {
    return new Promise((resolve, reject) => {
        num = Math.floor(Math.random() * 10);
        if (num !== 8){
        setTimeout(() => {
           resolve(superHeroes);
        }, 2500);
    } else {
         reject(new Error('The world is currently unsafe. No superheroes!!'));
    }
    });      
}

getSuperHeroes(superHeroes)
.then((superHeroes) => {
    superHeroes.forEach((superhero) => {
        if (superhero.universe == 'DC') {
            superhero.team = 'Justice League';
        } else {
            superhero.team = 'Avengers';
        }
    })
    console.log('Team array:');
    console.log(superHeroes);
})
.then(() => {
    superHeroes.map((superhero) => {
        if (superhero.power > 90) {
            return superhero.rank = 'Top Tier';
        } else {
            return superhero.rank = 'Second Tier';
        }
    })
    console.log('Rank array:');
    console.log(superHeroes);
})
.then(() => {
    const marvel = superHeroes.filter((superhero) => {
        return superhero.universe == 'Marvel';
    })
    console.log('Marvel array:');
    console.log(marvel);
})
.then(() => {
    const sorted = superHeroes.sort((a, b) => {
        return b.power - a.power;
    })
    console.log('Sorted array:');
    console.log(sorted);     
})
.catch((error) => {
    console.log(error.message);
});
