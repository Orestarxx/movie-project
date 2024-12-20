import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Universe | Movie",
    description: "Generated by create next app",
};

export default function MovieLayout({
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