"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push('/login/' + route);
  };
  return (
    <div>
      <h1 className="heading">Hello !! I am log in page</h1>
      <Link href="/">Home</Link>
      <br />
      <br />
      <button onClick={() => navigate("loginStudent")}>
        Go to Student Login Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("loginTeacher")}>
        Go to Teacher Login Page
      </button>
    </div>
  );
};

export default LogIn;
