const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galielei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Plank', year: 1858, passed: 1947}   
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
     'Bellow, Saul', 'Benchley, Rober', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walkter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Ambrose', 'Biko, Steve', 'Billings, Josh', 
    'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'  ];

    //Array.prototype.filter()
    //1.Filter the list of inventors for those who were born in the 1500's
const fifteenHundreds = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);
console.log(fifteenHundreds);

    //Array.prototype.map()
    //2. Give us an array of the inventory first and last names
const firstAndLast = inventors.map(inventor => inventor.first + ", " + inventor.last);
console.log(firstAndLast);
    //Array.prototype.sort()
    //3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort((a, b) => a.year > b.year ? 1 : -1 );
console.table(oldestToYoungest);
    //Array.prototype.reduce()
    //4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//5. Sort the inventors by years lived
inventors.forEach(inventor => inventor.age = inventor.passed - inventor.year);
const longestLived = inventors.sort((a,b) => a.age < b.age)
console.table(longestLived);

//6. Create a list of Boulevards in Paris that contain 'de' andywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//7.Sort Execise 
// Sort the people alphabetically by last name

//8. Reduce Exercise
// Sum up the instances of each of these