

export default function Page(){

    let emptyArray = [];
    let array1 = [1,2,3,4,5];
    array1.push(6);
    array1.splice(2,2);
    let array2 = ["CPRG303", "CPRG306", "CPRG123"];
    array2.pop();


    let numbers = [5,3,9,1,4];
    let doubled = numbers.map( (num) => num * 2);
    {/* arrays with .filter */}
    let lessThanFive = numbers.filter( (num) => num < 5 );
    let moreNumbers = [6,7,8];
    let allNumbers = numbers.concat(moreNumbers);
    // let sortedNumbers = numbers.sort( (a,b) => a-b); - lowest to highest
    let sortedNumbers = numbers.sort( (a,b) => b-a); // highest to lowest
    // let  sortedNumbers = numbers.toSorted(); - This is the 2nd same function for .sort
    let additionFunction = (accumulator, currentValue) => accumulator + currentValue;
    let sum = numbers.reduce(additionFunction, 18);

    // let sum = numbers.reduce(
        // (accumulator, currentValue) => accumulator + currentValue , 
        // 0
    // );


    return(
        <main>
            <h1>ARRAYS</h1>
        
            {/* <p>{array1}</p> */}
            {/* <p>{array2}</p> */}
            <p>{numbers}</p>
            <p>{doubled}</p>
            {/* arrays with .map */}
            <p>{numbers.join (" | ")}</p>
            <p>{numbers.map ((num) => `${num},`)}</p>
            <p>{doubled.map ((num) => `${num},`)}</p>
            <p>{lessThanFive}</p>
            <p>{allNumbers}</p>
            <p>{sortedNumbers}</p>
            <p>{sortedNumbers.join(" , ")}</p>
            <p>{sum}</p>
        </main>

    );
}