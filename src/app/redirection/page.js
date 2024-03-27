import { redirect } from "next/navigation"

export default function Redirect() {
    //redirect('/')
    return(
        
        <div>
            <h1>
                Redirection Pages in Next js
            </h1>
        </div>
    )
}

//that is one way of redirecting to other route by importing redirect from next/navigation
// second way is to make config file changes and set the routes there with source destination and permanenet 
// permanaent is set to be true if the page we are redirecting from is closed permanently else we set this to false