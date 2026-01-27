```javascript
const Products = [
    {
        id: 'S01',
        name: 'ErgoChair Pro',
        category: 'Furniture',
        price: 299,
        stock: 12,
        rating: 4.8,
        tags: ['office', 'ergonomic']
    },
    {
        id: 'E05',
        name: 'UltraWide Monitor',
        category: 'Electronics',
        price: 450,
        stock: 5,
        rating: 4.5,
        tags: ['tech', 'gaming', 'work']
    },
    {
        id: 'K12',
        name: 'AirFryer 3000',
        category: 'Kitchen',
        price: 120,
        stock: 0,
        rating: 4.2,
        tags: ['home', 'cooking']
    },
    {
        id: 'E09',
        name: 'Noise-Canceling Buds',
        category: 'Electronics',
        price: 199,
        stock: 25,
        rating: 4.7,
        tags: ['tech', 'music', 'travel']
    },
    {
        id: 'S15',
        name: 'Standing Desk',
        category: 'Furniture',
        price: 550,
        stock: 8,
        rating: 4.9,
        tags: ['office', 'work']
    },
    {
        id: 'K02',
        name: 'Espresso Machine',
        category: 'Kitchen',
        price: 850,
        stock: 3,
        rating: 4.6,
        tags: ['home', 'coffee']
    },
    {
        id: 'E11',
        name: 'USB-C Hub',
        category: 'Electronics',
        price: 45,
        stock: 50,
        rating: 4.0,
        tags: ['tech', 'accessory']
    }
];
```

Check the below questions and implement the logic:

- Create an array of products that have a stock of 0 (for the warehouse team).
- Find all products in the "Furniture" category that are priced above $300.
- Create an array of strings that only contains the product names and their prices formatted as: `ErgoChair Pro` - `$299`.
- Create an array containing only the tags array for each product, but convert all tags to UPPERCASE.
- Calculate the total dollar value of the entire warehouse `(sum of price * stock for all items)`
- Filter for products that include the tag "work".
- Reduce the result to find the Average Price of these specific "work" items.
- Update the key name `category` as `Category` in each item inside `Products`

```javascript
const siteSettings = {
    theme: 'dark',
    currency: 'USD',
    language: 'English',
    showNotifications: 'true',
    itemsPerPage: '20',
    version: '1.2.0'
};
```

Check the below questions and implement the logic:

- Create a new object where the keys become the values and the values become the keys
- Write a function called `hasKey(obj, keyName)` that returns `true` if a key exists in the object, without using a `for...in` loop.
- Create a function `removeSetting(obj, keyToRemove)` that returns a new version of the object with that specific key deleted.
- Capitalize all the key names in the object.

```javascript
const countryData = [
    {
        name: { common: 'India', official: 'Republic of India' },
        currencies: { INR: { name: 'Indian rupee', symbol: '₹' } },
        capital: ['New Delhi'],
        region: 'Asia',
        subregion: 'Southern Asia',
        languages: { hin: 'Hindi', eng: 'English', tam: 'Tamil' },
        population: 1380004385,
        continents: ['Asia']
    },
    {
        name: { common: 'Germany', official: 'Federal Republic of Germany' },
        currencies: { EUR: { name: 'Euro', symbol: '€' } },
        capital: ['Berlin'],
        region: 'Europe',
        subregion: 'Western Europe',
        languages: { deu: 'German' },
        population: 83240525,
        continents: ['Europe']
    },
    {
        name: { common: 'Brazil', official: 'Federative Republic of Brazil' },
        currencies: { BRL: { name: 'Brazilian real', symbol: 'R$' } },
        capital: ['Brasília'],
        region: 'Americas',
        subregion: 'South America',
        languages: { por: 'Portuguese' },
        population: 212559417,
        continents: ['South America']
    }
];
```

- Create an array of strings containing only the Currency Symbols for every country.
- Find all countries that speak more than one language.
- Create a unique list (array) of every language spoken across all countries in the dataset, without duplicates.
