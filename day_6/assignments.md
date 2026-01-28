```javascript
let coordinates = [34.0522, -118.2437, 89]; // [latitude, longitude, altitude]

// Current way:
let lat = coordinates[0];
let lon = coordinates[1];
let alt = coordinates[2];

console.log(`Lat: ${lat}, Lon: ${lon}, Alt: ${alt}`);

// TODO: Refactor using a single line of array destructuring.
```

```javascript
let user = {
    id: 101,
    profile: {
        username: 'coder_99',
        avatar: 'image.png'
    }
};

// Current way:
let username = user.profile.username;
let avatar = user.profile.avatar;

console.log(`${username} uploaded ${avatar}`);

// TODO: Use a single destructuring statement to extract 'username'
// and 'avatar' directly from the 'user' object.
```

```javascript
const library = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: '1984', author: 'George Orwell' }
];

// Current way:
for (let book of library) {
    console.log(`${book.title} by ${book.author}`);
}

// TODO: Refactor the 'for...of' loop to destructure 'title' and 'author'
// directly in the loop head.
```

```javascript
const account = {
    id: 'USR-9921',
    username: 'shutter_bug',
    email: 'bug@example.com',
    joined: '2023-01-01'
};

// TODO: Use object destructuring to:
// 1. Extract 'id' into its own variable.
// 2. Use the rest operator (...) to collect all other properties
//    into a new object called 'publicInfo'.

console.log(id); // USR-9921
console.log(publicInfo); // { username: "shutter_bug", email: 'bug@example.com', joined: '2023-01-01' }
```
