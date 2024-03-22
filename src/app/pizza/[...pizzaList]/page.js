"use client"
export default function PizzaList({params}) {
    console.log(params)
    return (
      <div>
        <h3>Pizza Name : {params.pizzaList[0]}</h3>
        <br />
        <h3>Pizza Quantity : {params.pizzaList[1]}</h3>
      </div>
    );
  }
  