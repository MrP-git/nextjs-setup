import React from 'react';
import { Layout as MyLayout } from 'antd';
import  Footer from '../../Shared/Footer'
import NavBar from '../../Shared/NavBar';

import './index.css';

const { Content } = MyLayout;

const Layout = ({ children }) => (
    <MyLayout>
        <header>
            <NavBar />
        </header>

        <Content className="container mx-auto bg-white mt-16 lg:mt-20">{children}</Content>

        <Footer />
    </MyLayout>
);

export default Layout;
