const { default: Link } = require("next/link");

const LoginStudent = () => {
  return (
    <div>
      <h1 className="heading">Heelo !! i am a student login</h1>
      <br />
      <br />
      <Link href="/login">LogIn </Link>
    </div>
  );
};

export default LoginStudent;
