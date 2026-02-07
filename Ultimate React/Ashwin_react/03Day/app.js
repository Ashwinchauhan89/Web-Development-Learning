// Basic React Website of the Election Commission Of India


function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// const props = {
//     name:"Rohit"
// }

// const {name} = props;

function Main({user}){

    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
        
    )
}


// <> frament instead of the div

function Footer(){

    return (
        <h3>Thank for visiting our website</h3>
    )
}

// function Card(){

// }


function App(){

    return (
        <>

       <Header name="Rohit"></Header>

       <Main user={{name:"Rohit",age:30,city:"Kotdwar"}}></Main>

       <Footer />
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);




// Bundler Like
/// vite
// webpack
// parcel

// npm -> node package manager
//react
//react-dom
//babel


//npm install react
// npm install  react-dom



// Step 1 : npm init

// Create the package.json file
// it will track all the dependencies of the project


//Step 2 : npm install react 
// node_modules folder 



// Step 3 : Bundler Vite  // bebal ki jarurat nhi padegi

// npm install -D vite

//  vite => ESbuilder + dev server
// ESbuilder => convert the jsx code to js code

