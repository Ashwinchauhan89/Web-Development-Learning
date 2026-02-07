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