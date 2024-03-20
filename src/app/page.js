'use client'
import { useState } from "react";
import styles from "./page.module.css";

const InnerComp = () => {
  return(
    <h1>I am from inner component</h1>
  )
}

export default function Home() {
  const [name, setName] = useState('amit')
  const check = () => {
    //alert(item)
    setName('Amit Goyal')
  }
  return (
    <main className={styles.main}>
      {/* <User name = 'Anmit'/>*/}
      <h1>home Page {name}</h1> 
      <button onClick={()=> check()}>Click</button>
      {/* calling component as a normal call */}
      <InnerComp />
      {/* calling component as a function call */}
      {InnerComp()}
    </main>
  );
}


const User = (props) => {
  return(
    <div>
      {props.name} is saying hello from this page
    </div>
  )
  
}