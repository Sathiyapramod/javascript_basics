import { Products } from './config.js';

// Create an array of products that have a stock of 0 (for the warehouse team).
console.log(
    Products.filter((eachProduct) => {
        return eachProduct.stock == 0;
    })
);

// Find all products in the "Furniture" category that are priced above $300.
console.log(
    Products.filter((eachProduct) => {
        return eachProduct.price > 300;
    })
);

// Create an array of strings that only contains the product names and their prices formatted as: `ErgoChair Pro` - `$299`.
console.log(
    Products.map((eachProduct) => {
        let name = eachProduct.name;
        let price = eachProduct.price;
        return `${name} - $${price}`;
    })
);

// Create an array containing only the tags array for each product, but convert all tags to UPPERCASE.
console.log(
    Products.map((eachProduct) => {
        let tags = eachProduct.tags.map((eachTag) => {
            return eachTag.toUpperCase();
        });
        return {
            tags: tags
        };
    })
);

// Calculate the total dollar value of the entire warehouse `(sum of price * stock for all items)`

console.log(
    Products.reduce((TotalValue, eachProduct) => {
        let total = eachProduct.price * eachProduct.stock;
        return TotalValue + total;
    }, 0)
);

// Filter for products that include the tag "work".
console.log(
    Products.filter((eachProduct) => {
        return eachProduct.tags.includes('work');
    })
);

// Reduce the result to find the Average Price of these specific "work" items.
let costing = Products.map((eachProduct) => {
    return eachProduct.price * eachProduct.stock;
}, 0);

console.log(
    costing.reduce((acc, el) => acc + el),
    0
);

// Update the key name `category` as `Category` in each item inside `Products`

console.log(
    Products.map((eachProduct) => {
        return {
            ...eachProduct,
            Category: eachProduct.category
        };
    })
);
