import React from "react";

import styles from './page.module.css'
import Home from "@/app/components/home/Home";


export default function HomePage() {
  return (
   <div id={styles.homePage}>
    <Home/>
   </div>
  );
}
