
export default function Item({itemObj}){
    let {id, name, quantity, category } = itemObj;


    return(
        <main className="rounded p-4 bg-slate-300 text-black">
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </main>
    );
}