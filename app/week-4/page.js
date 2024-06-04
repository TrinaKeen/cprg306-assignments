
export default function Page(){


    function helloWorld(username){
        return "Hello " + username;
    }

    const helloWorld2 = ( username)  => {
        return "Hello " + username;
    }

    // This one send the message in the terminal instead. "console.log"
    const helloWorld22 = ( username)  => {
        console.log(`Hello ${username}, this message has been logged.`) ;
        return;
    }

    helloWorld22('bob');

    const helloWorld3 = (username) => `Hello, ${username}`;

    const helloMath = (a,b) => a + b;


    const louder = (displayTextFunction) => {
        const displayText = displayTextFunction("Alice");
        return `${displayText.toUpperCase()}!!!`
    }

    const multyplyBy = (num1) => {
        return (num2) => {
            return num1 +num2;
        }
    }

    const multyplyByThree = multyplyBy(3);
    const multyplyByTen = multyplyBy(10);
    

    return(
        <main>
            <p>{helloWorld("Joe")}</p>
            <p>{helloWorld2("Bob")}</p>
            <p>{helloWorld3("Alice")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld3)}</p>
            <p>{multyplyByThree(7)}</p>
            <p>{multyplyByTen(7)}</p>
        </main>
    );
}