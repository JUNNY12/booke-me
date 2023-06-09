import React from 'react';
import Header from '../modules/Header';
import Footer from '../modules/Footer';
import { Container, TopHeader } from '../modules';

export const DefaultLayout = ({ children }) => {
    return (
        <div className=" min-h-screen">
            <Header />
            <TopHeader />
            <div>{children}</div>
            <Footer />
        </div>
    );
};
