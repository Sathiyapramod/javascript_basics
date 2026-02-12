console.log('a');

console.log('b');

setTimeout(() => {
    console.log('this will be fired within 0 seconds');
}, 0);

var a = new Promise((resolve, reject) => {
    if (10 < 20) resolve('it is ok');
    else reject('something happened wrongly');
});

a.then((res) => console.log(res)).catch((err) => console.log('err'));
