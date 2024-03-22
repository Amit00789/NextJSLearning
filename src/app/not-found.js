import Link from "next/link";

export default function NotFound() {
    return(
        <div>
            <h3>This Page is not available</h3>
            <br />
            <Link href="/">Go To Home Page !! Please</Link>
        </div>
    )
}