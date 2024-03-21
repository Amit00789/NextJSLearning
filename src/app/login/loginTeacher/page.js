const { default: Link } = require("next/link");

const LoginTeacher = () => {
  return (
    <div>
      <h1 className="heading">Heelo !! i am a Teacher login</h1>
      <br />
      <br />
      <Link href="/login">LogIn </Link>
    </div>
  );
};

export default LoginTeacher;
