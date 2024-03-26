import User from "@/services/getUser";
import Link from "next/link";
export default async function Page() {
  const users = User();
  const data = await users
  return (
    <div>
      <h1>
        Here we will use static site generation using next js and will get thi
        with user list
      </h1>
      {data.map((item) => (
        <h3 key={item.id}>
          <Link href={`/staticSiteGeneration/${item.id}`}>
            {" "}
            Name : {item.name}
          </Link>
        </h3>
      ))}
    </div>
  );
}
