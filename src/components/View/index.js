import React from "react";
import { views } from "./data";
import { Container, Hero, Item, HeroSection, Info, Logo } from "./styled";
function View() {
    return (
        <Container>
            {views.map((view) => {
                return (
                    <Item key={view.name}>
                        <Logo>{view.img}</Logo>
                        <HeroSection>
                            <Hero>{view.name}</Hero>
                            <Info>{view.value}</Info>
                        </HeroSection>
                    </Item>
                );
            })}
        </Container>
    );
}

export default View;
