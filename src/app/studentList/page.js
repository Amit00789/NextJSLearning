import Link from "next/link";

export default function StudentList() {
    const Names = ['Amit','Anil','Ankit','Aman','Alan']
  return (
    <div>
      <ul>
      {Names.map((name, index) => (
          <li key={index}>
            <Link href={`/studentList/${name}`}>{name}</Link>
            </li>
        ))}
        {/* <li>
          <Link href="/studentList/Amit">Amit</Link>
        </li>
        <li>
          <Link href="/studentList/Adit">Adit</Link>
        </li>
        <li>
          <Link href="/studentList/Vikas">Vikas</Link>
        </li>
        <li>
          <Link href="/studentList/Brain">Brain</Link>
        </li>
        <li>
          <Link href="/studentList/Dio">Dio</Link>
        </li> */}
      </ul>
    </div>
  );
}
