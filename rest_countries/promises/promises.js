const timeCheck = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Time is up');
    }, 3000);
});

timeCheck
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

// synchronous
const eventA = new Promise((resolve, reject) => {
    if (1 > 2) reject('some error has happened');
    else resolve('it is good to go');
});

eventA.then((result) => console.log(result)).catch((err) => console.log(err));

// asynchronous
// fetch call Promise -reject
const a = [10, 20, 30];

await Promise.all(a.map(async (eachEntry) => { 
    try {
        // 
    }
    catch (err) { 
        // 
    }
}));
