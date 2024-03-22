"use client"
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const path = usePathname();
  const rout = ["/login/loginStudent", "/login/loginTeacher"];
  return (
    <div>
      {!rout.includes(path) ? (
        <ul className="login-menu">
          <li>
            <h4>Login Nav</h4>
          </li>
          <li>
            <Link href="/login">Log In </Link>
          </li>
          <li>
            <Link href="/login/loginStudent">Student Log In </Link>
          </li>
          <li>
            <Link href="/login/loginTeacher">Teacher Log In </Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Log In </Link>
      )}
      {children}
    </div>
  );
}
