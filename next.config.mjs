/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:["www.floralwallpaper.co.uk"]
    },
    redirects: async () => {
        return  [
            {
                source: '/redirection',
                destination: '/',
                permanent: false
            },
            {
                source: '/redirection/:redirection',
                destination: '/',
                permanent: false
            }
        ]
    }
};

export default nextConfig;


// if we will add output : "export"  here then it will generate static html file from the pages after build in out folder
// it is used to generate html files from the pages and routes 