import Image from "next/image";
import image from '../../../public/next.svg'

export default function ImageOptimization() {
    return(
        <div>
            <h2>Here we are going to use Image tage in NextJS</h2>
            <Image src={"https://www.floralwallpaper.co.uk/wp-content/uploads/sites/15/2022/11/wallpaper-of-opened-lotus-flower.jpg"} 
            alt="Next Image"
            width={500}
            height={500}
            quality={99}
            />
        </div>
    )
}


// Image tag in next js optimize image over the server and show on browser
// it is better than usual html image tag because it optimizes the size and with the help of Image tag we can get original configyrations of imgage
// to use image from any domains we need to register those domains first in next config file so it enhances the security and it will only load the images we approve
// the way to condig is in next config file
// and most importantly it is server componenet so that the image will load on server side and it will take less time on browser
// we can give height and width in image tag
// for more information read NExt js documentation for Image tag