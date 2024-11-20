import React from "react";
import Home from "@/app/components/home/Home";
import styles from './page.module.css'


export default function HomePage() {
  return (
   <div id={styles.homePage}>
    <Home/>
   </div>
  );
}
