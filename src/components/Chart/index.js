import React, { useState, useEffect } from "react";

import localStorageUtils from "../../utils/localStorageUtils";
import Modal from "../Modal";
import { Container, ChartContainer } from "../style";
import { useNavigate } from "react-router-dom";
import ChartComponent from "./Chart";
import Buttons from "../Button/Buttons";

import {
    ActionWrapper,
    MainWrapper,
    HeaderWrapper,
    Coin,
    Left,
    Right,
    Price,
    OldPrice,
    Card,
    Hero,
    Balance,
} from "./styled";
import View from "../View";
import Profile from "../Profile";
import productApi from "../../utils/api/productApi";
import { createSocketConnection, getSocket } from "../../socket";
import Number from "../AnimatedNumber";
//only create connection only when the user login , otherwise just use socket regularly
import DropDown from "../DropDown";
import RadialChart from "../RadialChart";
const Chart = () => {
    const token = localStorageUtils.getItem("authorization");
    const navigate = useNavigate();
    const [bitcoinPrices, setBitcoinPrices] = useState([]);
    const [realTimePrice, setRealTimePrice] = useState("Loading...");
    const [showModal, setShowModal] = useState(false);
    const [balance, setBalance] = useState(100);
    const [countdown, SetCountDown] = useState(60);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [items, setItems] = useState(null);
    const [rate, setRate] = useState(null);
    const [label, setLabel] = useState({
        name: "BitCoin",
        img: "https://static2.crypto.com/exchange/token-icons/dark/BTC.png",
        symbol: "BTC",
    });

    useEffect(() => {
        const auth = localStorageUtils.getItem("authorization");
        if (!auth) {
            navigate("/login");
        } else {
            createSocketConnection();
        }
        return () => {
            getSocket().disconnect();
        };
    }, [token]);

    useEffect(() => {
        getSocket().on("bitcoinPrice", (price) => {
            setRealTimePrice(price);
            getSocket().emit("receiveCoin");
            setBitcoinPrices((prevPrices) => {
                const rate =
                    Math.round(
                        (prevPrices[prevPrices.length - 1]?.price / price) *
                            100000
                    ) / 1000;

                console.log(rate);
                setRate(rate > 0 ? 100 - rate : rate);
                const newPrices = [
                    ...prevPrices,
                    {
                        time: `${new Date().getMinutes()} : ${new Date().getSeconds()}`,
                        price,
                    },
                ];

                return newPrices.slice(-25); // only get 25 of the latest price
            });
            setIsButtonDisabled(false);
        });
        getSocket().on("balance", (balance) => {
            setBalance(balance);
        });
        getSocket().on("countdown", (countdown) => {
            SetCountDown(countdown);
        });
        getSocket().on("coinChanged", () => {
            setBitcoinPrices([]);
        });
    }, []);
    useEffect(() => {
        setIsButtonDisabled(false);
    }, [bitcoinPrices]);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const getCoin = async () => {
        const path = await productApi.getCoin(token);
        const newArr = path.data.account.data.map((obj) => {
            const { coin_id, coin_name, coin_img, coin_symbol } = obj; // Destructure the id and rename it to key
            return {
                key: coin_id,
                label: coin_name,
                img: coin_img,
                symbol: coin_symbol,
            }; // Return a new object with the updated attribute name
        });

        setItems(newArr);
    };
    useEffect(() => {
        getCoin();
    }, []);
    const onClick = ({ key }) => {
        console.log(`Click on item ${items[key - 1].label} `);
        setLabel({
            name: items[key - 1].label,
            img: items[key - 1].img,
            symbol: items[key - 1].symbol,
        });
        getSocket().emit("newCoin", { newCoin: items[key - 1].label });
    };
    const menu = {
        items,
        onClick,
    };

    return (
        <Container>
            <Modal isOpen={showModal} onClose={handleCloseModal} />
            <MainWrapper>
                <HeaderWrapper>
                    <Left>
                        <Coin>
                            <img src={label.img} alt="crypto img" />
                            <h1>{label.name}</h1>
                            <h3>{label.symbol}</h3>
                        </Coin>
                        <Price>
                            {realTimePrice}US$
                            <OldPrice>{rate}</OldPrice>
                        </Price>
                        <h1>Time remaining : {countdown}</h1>
                    </Left>
                    <Right>
                        <DropDown menu={menu} label={label.name} />
                    </Right>
                </HeaderWrapper>
                <ChartContainer>
                    <section>
                        <ChartComponent bitcoinPrices={bitcoinPrices} />
                    </section>
                </ChartContainer>
                <View />
            </MainWrapper>
            <ActionWrapper>
                <Profile />
                <Card>
                    {balance && <RadialChart balance={balance} />}
                    <Hero>Total Balance</Hero>
                    <Balance>${balance}</Balance>
                </Card>
                <Buttons
                    setRealTimePrice={setRealTimePrice}
                    SetCountDown={SetCountDown}
                    setShowModal={setShowModal}
                    isButtonDisabled={isButtonDisabled}
                    setBalance={setBalance}
                    setIsButtonDisabled={setIsButtonDisabled}
                />
            </ActionWrapper>
        </Container>
    );
};

export default Chart;
