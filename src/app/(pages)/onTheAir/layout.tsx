import type {Metadata} from "next";
import React from "react";
export const metadata: Metadata = {
    title: "Universe | On The Air",
    description: "Generated by create next app",
};

export default function MoviesLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>



    );
}