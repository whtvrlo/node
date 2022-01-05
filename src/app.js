

// SOME LOGIC TO ADD ON TO AN

const fs = require('fs'); // module enables interacting with the file system
const { addMovie } = require("./utils/index")


const app = () => {
    let movieArray;
    try {
        movieArray = JSON.parse(fs.readFileSync("./storage.json"));

    } catch (error) {
        movieArray = [] // if it doesnt exist then theres no json data to pass, so therefor we create a new one
        console.log(movieArray);
    }
    // console.log(process.argv[2])
    if (process.argv[2] === 'title' && process.argv[4] === 'actor') { // grabbing the object finding the particular key called argv , getting the element at index 2. Say: getting the element of the array at index 4. Later we stringify that and write it to the file.
        //addMovie(process.argv[3], process.argv[5]); 
        addMovie(movieArray, { title: process.argv[3], actor: process.argv[5] }); 
        console.log("add movie done")
    } else {
        console.log("I dont understand!!!")
    }
};

app()




// element0: node, el 1: src/app.js, el2: title el3: "a film" el4: actor el5: "dave"



//// unedited example ; getting 1 array logic
// const fs = require('fs'); // module enables interacting with the file system
// const { addMovie } = require("./utils/index")



// const app = () => {
//     console.log(process.argv[2])
//     if (process.argv[2] === 'title' && process.argv[4] === 'actor') { // grabbing the object finding the particular key called argv , getting the element at index 2. Say: getting the element of the array at index 4.
//         addMovie(process.argv[3], process.argv[5]); 
//     } else {
//         console.log("I dont understand!!!")
//     }
// };

// app()


// // element0: node, el 1: src/app.js, el2: title el3: "a film" el4: actor el5: "dave"