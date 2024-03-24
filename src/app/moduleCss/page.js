import check from '../check.module.css'
export default function ModuleCss() {
    return(
        <div>
            <h1 className={check.main}>Hello I am from Module CSS page</h1>
        </div>
    )
}

// that's how we use module css in NextJs
// this way we can create multiple modules and then use their class in main pages by just importin them
// we can create a foleder in src as well in that we can keep all moduler css
// we can have multiple modules and apply them in same page if needed with same name of class