import express from 'express';

const app= express()

app.get('/', (req , res) => {
    res.send("Server is Ready")
});

//get a list of list 5 jokes
app.get('jokes' , (req, res) => {
    const jokes = 
        [
  {
    "id": 1,
    "title": "Array Length Surprise",
    "code": "let arr = [1, 2, 3];\narr[10] = 99;\nconsole.log(arr.length); // ???",
    "joke": "Why did the JavaScript array go to therapy? Because it had too many empty spaces inside!"
  },
  {
    "id": 2,
    "title": "IndexOf Trouble",
    "code": "let bugs = ['undefined', 'null', 'NaN'];\nconsole.log(bugs.indexOf('fix')); // -1",
    "joke": "Why can't you ever find your problems in a JavaScript array? Because they always return -1 when you search for \"fix\"!"
  },
  {
    "id": 3,
    "title": "Mutating Madness",
    "code": "let fruits = ['apple', 'banana'];\nlet result = fruits.push('mango');\nconsole.log(result); // 3",
    "joke": "Why did the developer break up with the push() method? Because it always added more problems to the list!"
  },
  {
    "id": 4,
    "title": "Typeof Array",
    "code": "console.log(typeof []); // \"object\"",
    "joke": "What’s JavaScript’s favorite lie? “I swear I’m an array, but I’m actually an object!”"
  },
  {
    "id": 5,
    "title": "The Spread Drama",
    "code": "let numbers = [1, 2, 3];\nlet copy = [...numbers];\nnumbers.push(4);\nconsole.log(copy); // [1, 2, 3]",
    "joke": "Why did the array break up with the spread operator? It said: “You copied me, but you’ll never change me!”"
  }
]

    
    
})




const port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`server at http://localhost:${port}`);
});