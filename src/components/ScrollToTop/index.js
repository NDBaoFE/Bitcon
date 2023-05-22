import React, { useEffect, useState } from "react";
import { Container, Button } from "./styled";
export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Container>
            {isVisible && (
                <Button onClick={scrollToTop}>
                    <svg
                        class="block "
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 25"
                    >
                        <path
                            class="s-main-element"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L17.7071 13.2929C18.0976 13.6834 18.0976 14.3166 17.7071 14.7071C17.3166 15.0976 16.6834 15.0976 16.2929 14.7071L12 10.4142L7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071C5.90237 14.3166 5.90237 13.6834 6.29289 13.2929L11.2929 8.29289Z"
                            fill="#292929"
                        ></path>
                    </svg>
                </Button>
            )}
        </Container>
    );
}
