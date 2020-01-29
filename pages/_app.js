import React from 'react';
import NextApp from 'next/app';
import Head from '../src/components/Shared/Head';
import Loader from '../src/components/Shared/Loader';
import { PageTransition } from 'next-page-transitions';
import '../styles/main.css'


const TIMEOUT = 400;

class MyApp extends NextApp {
    render() {
        const {
            Component,
            pageProps,
            router
        } = this.props;

        return (
            <div>
                <Head />
                <PageTransition
                    timeout={TIMEOUT}
                    classNames="page-transition"
                    loadingClassNames="loading-indicator"
                    loadingComponent={<Loader />}
                    loadingDelay={500}
                    loadingTimeout={{
                        enter: TIMEOUT,
                        exit: 0,
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </PageTransition>
            </div>
        );
    }
}

export default MyApp;
