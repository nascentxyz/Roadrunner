import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
    return (<Component {...pageProps} />);
}

export default MyApp
