"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };
  return (
    <main>
      <h1>Routing Home Page</h1>
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
      <button onClick={() => navigate("/login")}>Go to LogIn Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>Go to About Page</button>
    </main>
  );
}
