const bottle = {
        color: 'black',
        hold: 'water',
        price: 50
    }
    // Object.seal(bottle);
Object.freeze(bottle);
delete bottle.price;
console.log(bottle);

// Getting all properties name 
/*    const keys = Object.keys(bottle);
   console.log(keys); */

// Getting values

/* const values = Object.values(bottle);
console.log(values); */

//Delete element 

/* const entries = Object.entries(bottle);
delete bottle.price;
console.log(entries); */