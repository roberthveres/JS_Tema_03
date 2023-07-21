// Exercitiul 01-----------------
let CreateRecipeObj = (title, servings, ingredients,) => {
    let myRecipe = {
        title: title,
        servings: servings,
        ingredients: ingredients 
    };
    console.log(myRecipe)
}

let title = "Pizza";
let servings = 3;
let ingredients = ["ham", "crud", "ketchup"];



CreateRecipeObj(title, servings, ingredients)

// Exercitiul 02-------------------

const object = (obj, proprietate) => {
    let newObj = { ...obj};
    delete newObj[proprietate];
    console.log(newObj);    
}

object({a: 1, b: 2}, 'b')



// Exercitiul 03---------------------

let books = [
    {
        titlu: "carte 1",
        autor: "autor 1",
        esteCitita: true,
    },
    {
        titlu: "carte 1",
        autor: "autor 1",
        esteCitita: false,
    },    
    {
        titlu: "carte 1",
        autor: "autor 1",
        esteCitita: true,
    },
];

let displayBooks = (books) => {
    for (n = 0; n < books.length; n++ ) {
        // console.log(books[n])

        let book = books[n];
        let {titlu, autor, esteCitita} = book;
        console.log(`${titlu} de ${autor} `);

        if (esteCitita) {
            console.log(`Ai citit deja "${titlu}" de ${autor}`)
        } else {
            console.log(`Trebuie sa citesti "${titlu}" de ${autor}`)
        }

    }
} 

displayBooks(books)

