"use strict"

//alert("Hello!");



        /**
         * TODO:
         * Create an object with firstName and lastName properties that are strings
         * with your first and last name. Store this object in a variable named
         * `person`.
         *
         * Example:
         *  > console.log(person.firstName) // "Rick"
         *  > console.log(person.lastName) // "Sanchez"
         */

const person = {
        firstName: "Rick",
        lastName: "Sanchez"
        };

console.log(person.firstName);
console.log(person.lastName);

        /**
         * TODO:
         * Add a sayHello method to the person object that returns a greeting using
         * the firstName and lastName properties.
         * console.log the returned message to check your work
         *
         * Example
         * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
         */
person.sayHello = function(){
        return (`Hello from ${person.firstName}  ${person.lastName}!`);
        }

console.log(person.sayHello());


        /** TODO:
         * HEB has an offer for the shoppers that buy products amounting to
         * more than $200. If a shopper spends more than $200, they get a 12%
         * discount. Write a JS program, using conditionals, that logs to the
         * browser, how much Ryan, Cameron and George need to pay. We know that
         * Cameron bought $180, Ryan $250 and George $320. Your program will have to
         * display a line with the name of the person, the amount before the
         * discount, the discount, if any, and the amount after the discount.
         *
         * Uncomment the lines below to create an array of objects where each object
         * represents one shopper. Use a foreach loop to iterate through the array,
         * and console.log the relevant messages for each person
         */
//use conditionals...if customer buys more than $200 they get 12% discount include total bill after discount
//display a line with the name of the person the amount spent before the discount, the discount (if any), and the total after the discount.
//each object represents one shopper
        let shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

function exercise3(){
        for (const shopper of shoppers) {
                printShopper(shopper);
        }

}

        function printShopper(shopper) {
        let output = `Name: ${shopper.name} Amount: ${shopper.amount}`;

        if(shopper.amount > 200) {
                let discount = shopper.amount * 0.12;
                discount = discount.toFixed(2);
                output += ` 
                Discount: $${discount}`;

                let total = shopper.amount * 0.88;
                total = total.toFixed(2);
                output += `
                Total: $${total}`;
        }
}
        exercise3();



        /** TODO:
         * Create an array of objects that represent books and store it in a
         * variable named `books`. Each object should have a title and an author
         * property. The author property should be an object with properties
         * `firstName` and `lastName`. Be creative and add at least 5 books to the
         * array
         *
         * Example:
         * > console.log(books[0].title) // "The Salmon of Doubt"
         * > console.log(books[0].author.firstName) // "Douglas"
         * > console.log(books[0].author.lastName) // "Adams"
         */
let books = [ {
                title: "The Lost",
                author:{
                        firstName:"Jeffrey",
                        lastName:"Hottsun"
                }
        },


    {
                        title:"Stoner",
                        author:{
                                firstName:"John",
                                lastName:"Williams"
                        }
                },

    {
                        title: "Dune",
                        author: {
                                firstName: "Frank",
                                lastName: "Herbert"
                        }
                }
        ]

console.log(books[0]);
console.log(books[1].title)


        /**
         * TODO:
         * Loop through the books array and output the following information about
         * each book:
         * - the book number (use the index of the book in the array)
         * - the book title
         * - author's full name (first name + last name)
         *
         * Example Console Output:
         *
         *      Book # 1
         *      Title: The Salmon of Doubt
         *      Author: Douglas Adams
         *      ---
         *      Book # 2
         *      Title: Walkaway
         *      Author: Cory Doctorow
         *      ---
         *      Book # 3
         *      Title: A Brief History of Time
         *      Author: Stephen Hawking
         *      ---
         *      ...
         */
function printBooks(books) {
        //for each book in the array print it out
                for (let i= 0; i < books.length; i++) {
                        const book = books[i];
                        console.log(`Book #${i}
                        Title: ${book}
                        Author: ${book.author.firstName} ${book.author.lastName}
                        ------------------------`)
                }
        }
        printBooks(books);


        /**
         * Bonus:
         * - Create a function named `createBook` that accepts a title and author
         *   name and returns a book object with the properties described
         *   previously. Refactor your code that creates the books array to instead
         *   use your function.
         * - Create a function named `showBookInfo` that accepts a book object and
         *   outputs the information described above. Refactor your loop to use your
         *   `showBookInfo` function.
         */

function createBook(title, firstName, lastName){
        const book = {
                title,
                author: {
                        firstName,
                        lastName
                }
        }
        return book;
        }
        books.push(createBook("Misery", "Stephen", "King"));
printBooks(books);