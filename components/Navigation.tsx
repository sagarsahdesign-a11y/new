"use client";

import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Sagar Sah
            </div>
            <div className={styles.links}>
                <span onClick={() => scrollTo("work")}>Work</span>
                <span onClick={() => scrollTo("about-section")}>About</span>
                <span onClick={() => scrollTo("contact")}>Contact</span>
            </div>
        </nav>
    );
}
