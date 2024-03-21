import Link from "next/link"

const AboutStudent = () => {
    return(
        <div>
            <h1 className="heading">Heelo !! i am a student from MRU</h1>
            <br />
            <br />
            <Link href="/about">About </Link>
        </div>
    )
}

export default AboutStudent