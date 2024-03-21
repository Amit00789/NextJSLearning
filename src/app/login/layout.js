import Link from "next/link";
import './login.css'
export default function Layout({children}){
    return(
        <div>
            <ul className="login-menu">
                <li>
                    <h4>Login Nav</h4>
                </li>
                <li>
                    <Link href='/login'>Log In </Link>
                </li>
                <li>
                    <Link href='/login/loginStudent'>Student Log In </Link>
                </li>
                <li>
                    <Link href='/login/loginTeacher'>Teacher Log In </Link>
                </li>
            </ul>
            {children}
        </div>
    )
}