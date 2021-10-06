import Header from "../Header";
import Footer from "../Footer";
import Head from 'next/head'

export default function index(props) {
    const { children, pageTitle } = props;

    return (
        <div>
            <Head>
                <title>NEXT JS Basic | {pageTitle}</title>
                <meta name="description" content="Website Next Js Basic" />
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}
