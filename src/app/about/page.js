"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };
  return (
    <div>
      <h1 className="heading">Hello !! I am about page</h1>
      <Link href="/">Home</Link>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => navigate("/about/aboutStudent")}>
        Go to About Student Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/about/aboutCollege")}>
        Go to About College Page
      </button>
    </div>
  );
};

export default About;
