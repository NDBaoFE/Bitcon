import React, { useState, useEffect } from "react";
import {
    Container,
    Wrapper,
    ActionWrapper,
    Slider,
    Card,
    Hero,
    Balance,
    ProfitWrapper,
} from "./style";

import Profile from "../../components/Profile";
import HomeSlide from "../../components/Slider";
import Blog from "./components/Blog";
import RadialChart from "../../components/RadialChart";
import productApi from "../../utils/api/productApi";
import localStorageUtils from "../../utils/localStorageUtils";
import { defaultBalance } from "../../utils/constant";
import Number from "../../components/AnimatedNumber";
import { calPercentWin } from "../../utils/others";

function Home() {
    const token = localStorageUtils.getItem("authorization");
    const [balance, setBalance] = useState(0);

    const getBalance = async () => {
        return await productApi.getBalance(token);
    };
    const extablishBalance = async () => {
        const res = await getBalance();
        setBalance(res.data.balance.balance);
    };
    useEffect(() => {
        extablishBalance();
    }, []);
    return (
        <Container>
            <Wrapper>
                <Slider>
                    <HomeSlide />
                </Slider>
                <Blog />
            </Wrapper>
            <ActionWrapper>
                <Profile />
                <Card>
                    {balance && <RadialChart balance={balance} />}
                    <Hero>Total Balance</Hero>
                    <Balance>
                        $<Number num={balance}></Number>
                    </Balance>
                </Card>
                <ProfitWrapper>
                    <Hero style={{ marginTop: "20px" }}>Your profit</Hero>
                    <Balance>
                        <Number
                            num={calPercentWin(
                                balance - defaultBalance,
                                defaultBalance
                            )}
                        ></Number>
                        %
                    </Balance>
                </ProfitWrapper>
            </ActionWrapper>
        </Container>
    );
}

export default Home;
