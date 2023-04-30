import React from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Container } from '../modules/Container'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />

        </div>
    )
}

export default DefaultLayout