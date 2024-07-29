import Link from "next/link";

const linkstyles = "underline text-cyan-600 hover:text-cyan-300"

export default function Home() {
  return (
    <main >
      <div >
        <h1 className="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <div className="text-lg">
        <li><Link className={linkstyles} href="./week-1">Assignment Week 1</Link></li>
        <li><Link className={linkstyles} href="./week-2">Assignment Week 2</Link></li>
        <li><Link className={linkstyles} href="./week-3">Assignment Week 3</Link></li>
        <li><Link className={linkstyles} href="./week-4">Assignment Week 4</Link></li>
        <li><Link className={linkstyles} href="./week-5">Assignment Week 5</Link></li>
        <li><Link className={linkstyles} href="./week-6">Assignment Week 6</Link></li>
        <li><Link className={linkstyles} href="./week-7">Assignment Week 7</Link></li>
        <li><Link className={linkstyles} href="./week-7">Assignment Week 8</Link></li>
        </div>
      </div>
    </main>
  );
}
