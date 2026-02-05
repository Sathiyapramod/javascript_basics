const processA = new Promise((resolve, reject) => {
    if (2 < 3) resolve('2 is greater than 3 ');
    else reject('Some Error has happened');
});

console.log(processA);

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
