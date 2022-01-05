const fs = require("fs");
const { title } = require("process");

const addMovie = (movieArray, movieObject) => {
    console.log(movieObject)
    movieArray.push(movieObject) // pushing new array 
    console.log(movieArray)
    // const stringyObj = JSON.stringify(movieArray); // 
    // console.log(stringyObj)
    // movieArray.pop(movieObject) // this would remove it - 
    fs.writeFileSync('./storage.json', JSON.stringify(movieArray));
    
 


}

module.exports = {
    addMovie
}



// try {
//     // console.log(JSON)
//     const stringyObj = JSON.stringify({title: movieArray, 
//     actor: movieObject});
//     fs.writeFileSync('./storage.json', stringyObj);
//     // console.log(JSON)

// } catch (error){
//     console.log(error)
// }





// //// unedited example ; getting 1 array logic
// const fs = require("fs");

// // const stringObj = JSON.stringify({
// // // create a JSON file and we hve the key and the object 
// // title: process.argv[3],
// // actor: process.argv[5],
// // });

// // fs.writeFileSync(`./storage.json`, stringyObj);

// const addMovie = (title, actor) => {
//     try {
//         console.log(JSON)
//         const stringyObj = JSON.stringify({title: title, 
//         actor: actor});
//         fs.writeFileSync('./storage.json', stringyObj);
//         console.log(JSON)

//     } catch (error){
//         console.log(error)
//     }

// }

// module.exports = {
//     addMovie
// }