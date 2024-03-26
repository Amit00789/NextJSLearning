"use client"
import Script from "next/script";

export default function MyLocation() {
    return(
        <div>
            <Script src="/location.js" onLoad={()=> {
                console.log("function is loaded and it will ask location now")
            }}
            />
            <h1>
                Here to get the location
            </h1>
        </div>
    )
}


// basically this Script componenet works like html script tag only
// but the differnece is in html it loads the external library in whole project but in next js it will load only the specific page
// for more info and practgice use official doc