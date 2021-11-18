import React from "react";
import { Header } from ".";
import Footer from '../components/Footer'

export default function Layout({children}) {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

            <Header />
            {children}
            <Footer/>
        </>
    )
}
