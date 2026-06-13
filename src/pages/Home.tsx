import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Templates } from '../components/sections/Templates';
import { Pricing } from '../components/sections/Pricing';
import { About } from '../components/sections/About';
import { Footer } from '../components/sections/Footer';

export function Home() {
    return (
        <>
            <Helmet data-jc-id="48YU0V">
                <title data-jc-id="48YU3C">Build Shipping - Launch Your Online Store</title>
                <meta name="description" content="Build beautiful e-commerce stores without coding. Choose a template, customize it, and start selling today." data-jc-id="48YURK"/>
            </Helmet>

            <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-950 transition-colors" data-jc-id="48YVP9">
                <Header data-jc-id="48YWZO"/>
                <main data-jc-id="48YX27">
                    <Hero data-jc-id="48YX4Q"/>
                    <Features data-jc-id="ACATZ9"/>
                    <Templates data-jc-id="ACATWK"/>
                    <Pricing data-jc-id="ACATT9"/>
                    <About data-jc-id="ACAT8I"/>
                </main>
                <Footer data-jc-id="ACAT45"/>
            </div>
        </>
    );
}
