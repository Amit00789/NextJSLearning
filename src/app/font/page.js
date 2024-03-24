import {Antic_Slab} from 'next/font/google'

const font = Antic_Slab({
    weight: '400',
    subsets: ['latin']

})

export default function Font() {
    return(
        <div>
            <h3 className={font.className}>Font Optimization through Next js font inbuilt tag</h3>
        </div>
    )
}

// we can use font optimization from Next itself
// it is a inbuilt feature like image optimization 
// it won't make any outside request so it's fast
// it is secure
// for more infor read the Docs