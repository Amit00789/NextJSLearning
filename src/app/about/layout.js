import Link from "next/link";
import './about.css'
export default function Layout({children}){
    return(
        <div>
            <ul className="about-menu">
                <li>
                    <h4>About Nav</h4>
                </li>
                <li>
                    <Link href='/about'>About </Link>
                </li>
                <li>
                    <Link href='/about/aboutStudent'>About Student  </Link>
                </li>
                <li>
                    <Link href='/about/aboutCollege'>About College </Link>
                </li>
            </ul>
            {children}
        </div>
    )
}