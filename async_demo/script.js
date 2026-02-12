// function getDetails() {
//     fetch('https://restcountries.com/v3.1/all?fields=name')
//         .then((response) => {
//             return response.json();
//         })
//         .then((result) => console.log(result))
//         .catch((err) => {
//             console.log(err);
//         });
// }

// getDetails();

var countries = [];

countries = await getDetails();

async function getDetails() {
    try {
        let response = await fetch(
            'https://restcountries.com/v3.1/all?fields=name'
        );
        let data = await response.json();
        // console.log(data);
        countries = [...data];
    } catch (err) {
        console.log(err);
    }
}

console.log(countries);
