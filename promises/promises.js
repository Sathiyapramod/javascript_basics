
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
