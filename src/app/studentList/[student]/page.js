"use client"

export default function Students({params}) {
  return (
    <div>
      <h1>Here we come to know about student {params.student}</h1>
      <br/>
      <h3>Name : {params.student}</h3>
    </div>
  );
}
