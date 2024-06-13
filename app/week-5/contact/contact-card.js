import Contact from "@/app/week-4/contact/page";


export default function ContactCard({contactObj}){
    let {fname, lname, email, phone, type } = contactObj;


    return(
        <main className="rounded p-5 bg-blue-500">
            <h3 className="text-lg">{fname} {lname}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Contact: {type}</p>
        </main>
    );
}