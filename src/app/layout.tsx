import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Header from "@/app/components/header/headerComponent/Header";
import Menu from "@/app/components/menu/Menu";
import Footer from "@/app/components/footer/Footer";
import Logo from "@/app/components/logoComponent/Logo";


export const metadata: Metadata = {
    title: "Universe | Home",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <div id={'wrap'}>
            <div id={'infoHolder'}>
                <div id={'menuHolder'}>
                    <div>
                        <div id={'logoHolder'}>
                            <Logo/>
                        </div>
                        <Menu/>
                    </div>
                </div>
                <div id={'mainAndHeaderHolder'}>
                    <Header/>
                    <main>{children}</main>
                </div>
            </div>
            <div id={'footerHolder'}>
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    );
}
