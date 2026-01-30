// world
// continents
// countries

//  ?? Global Scope
var world = 'earth';
var continent = 'asia';

function viewWorld() {
    console.log(world); //'earth'
    world = 'mars';
    console.log(continent); // 'asia'
    // ?? Parent -> Lexical Scope
    // another child function
    function viewContinent() {
        continent = 'africa';
        console.log(world);

        // ?? Closures
        // grand child function
        function viewCountry() {
            console.log(world); // earth
            console.log(continent); //africa
        }
        viewCountry();
    }
    viewContinent();
}

console.log(world); // "earth"
viewWorld();
