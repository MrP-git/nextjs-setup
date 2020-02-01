import React from 'react';
import NextApp from 'next/app';
import '../styles/main.css'

class MyApp extends NextApp {
    render() {
        const {
            Component,
            pageProps,
            router
        } = this.props;

        return (
            <div>
                <Component {...pageProps} key={router.route} />
            </div>
        );
    }
}

export default MyApp;
