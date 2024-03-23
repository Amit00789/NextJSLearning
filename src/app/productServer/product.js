"use client"
export default function ProductPrice({price}) {
    return(
        <div>
            <button onClick={()=>alert(price)}>Click here for price</button>
        </div>
    )
}