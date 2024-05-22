import Link from "next/link";

const linkstyles = "underline text-cyan-600 hover:text-cyan-300"

export default function Home() {
  return (
    <main >
      <div >
        <h1 className="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="text-lg">
        <li><Link className={linkstyles} href="./week-2">Assignment Week 2</Link></li>
        </div>
      </div>
    </main>
  );
}
