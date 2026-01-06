// for loop
// 1. initialization
// 2. condition
// 3. incrementing/ decrementing

// 1 to 10
for (let i = 1; i < 11; i = i + 1) {
  //   console.log(i);
}

// 2 to 20
/*
option 1
for i in range(2,21,+1):
    if i % 2==0:
        print(i)
option 2
for i in range(2,21,+2):
    print(i)
*/
// option 1
for (let i = 2; i < 21; i = i + 1) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// option 2
for (let i = 2; i < 21; i = i + 2) {
  console.log(i);
}

// 1,3,5,7,11,.. 29
// option 1
for (let i = 1; i < 30; i = i + 1) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
// option 2
for (let i = 1; i <= 29; i = i + 1) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
// option 3
for (let i = 1; i <= 29; i = i + 2) {
  console.log(i);
}

y = 1;
// upto 10
while (y < 11) {
  console.log(y);
  // !important
  y = y + 1;
}

// 1,3,5,7,11,.. 29
n = 1;
while (n <= 29) {
  if (n % 2 != 0) {
    console.log(n);
  }
  n = n + 1;
}

// == and ===

var p = 20; // number
var q = "20"; // string

console.log(typeof p);
console.log(typeof q);

if (p == q) {
  // type casting
  console.log("both are similar");
} else {
  console.log("not same");
}
i = 1;

do {
  console.log(i);
  i = i + 1;
} while (i < 5);
