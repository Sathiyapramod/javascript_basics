const user = {
    name: 'alex',
    id: 100,
    status: true
};

// key value pairs

user.name = 'steve';
user['id'] = 101;

console.log(user);

const nums = [10, 20, 30];

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }

console.log(Object.keys(user));
console.log(Object.values(user));

// iteration
// for loop
for (let key in user) {
    console.log(key, '-', user[key]);
}

delete user['status'];
console.log(user);
