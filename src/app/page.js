"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [style, setStyle] = useState({'backgroundColor':'blue'})
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };
  return (
    <main>
      <h1 style={style}>Routing Home Page</h1>
      <br />
      {/* button for changing style using state */}
      <button onClick={()=>setStyle({'backgroundColor':'yellow'})}>Change the color</button>
      <br />
      <br />
      <Link href="/login">LogIn</Link>
      <br />
      <br />
      <Link href="/studentList">Student List</Link>
      <br />
      <br />
      <Link href="/pizza">Pizza List</Link>
      <br />
      <br />
      <Link href="/productList">Product List</Link>
      <br />
      <br />
      <Link href="/productServer">Product List Server Componenet</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Go to LogIn Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <br />
      <br />
      <Link href="/moduleCss">Module CSS</Link>
      <br />
      <br />
      <Link href="/imageOptimization">Image Optimization</Link>
      <br />
      <br />
      <Link href="/font">Font Optimization</Link>
    </main>
  );
}
