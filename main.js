const menu = { //Start by creating an empty menu object.
    _courses: { //Add a _courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.
        appetizers: [], //Create three properties inside the _courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.
        mains: [],
        desserts: []
    },
    get appetizers() { //Create getter and setter methods for the appetizers, mains, and desserts properties.
        return this._courses.appetizers;
        },  
    set appetizers(appetizersOne) {
        this._courses.appetizers = appetizersOne;
        },   
    get mains() {
        return this._courses.mains;
        }, 
    set mains(mainsOne) {
            this._courses.mains = mainsOne;
        },
    get desserts() {
        return this._courses.desserts;
        },
    set desserts(dessertsOne) {
        this._courses.appetizers = dessertsOne;
        },
    get courses() { //Inside your menu object, create an empty getter method for the _courses property
        return { //Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
            };
        },
    addDishToCourse(courseName, dishName, dishPrice) { //The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters. 
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);  //The method should then push this dish object into the appropriate array in your menu‘s _courses object based on what courseName was passed in.
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]; //Retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes.
        const randomIndex = Math.floor(Math.random() * dishes.length); //Generate a random index by multiplying Math.random() by the length of the dishes arra
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers'); //create an appetizer, main and dessert variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
        const main = this.getRandomDishFromCourse('mains'); //
        const dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `You ordered a ${appetizer.name}, then a ${main.name} and ${dessert.name}. It will cost you ${totalPrice} euros.`;
    }
 };

menu.addDishToCourse('appetizers', 'stuffed mushrooms', 4.50); //create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).
menu.addDishToCourse('appetizers', 'mozzarella sticks', 2.50);
menu.addDishToCourse('appetizers', 'spring rolls', 4.00);

menu.addDishToCourse('mains', 'roast beef with vegetables', 16.00);
menu.addDishToCourse('mains', 'eggplant lasagne', 13.00);
menu.addDishToCourse('mains', 'chicken soup', 8.00);

menu.addDishToCourse('desserts', 'apple pie', 4.50);
menu.addDishToCourse('desserts', 'strawberry cheesecake', 4.00);
menu.addDishToCourse('desserts', 'lemon icecream', 4.50);

const meal = menu.generateRandomMeal();
console.log(meal); 