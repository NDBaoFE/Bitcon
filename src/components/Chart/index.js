import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import productApi from "../../utils/api/productApi";
import localStorageUtils from "../../utils/localStorageUtils";
import Modal from "../Modal";
import { Container, ChartContainer } from "../style";
import { useNavigate } from "react-router-dom";
import ChartComponent from "./Chart";
import Buttons from "../Button/Buttons";

import { ActionWrapper, MainWrapper } from "./styled";
import View from "../View";
import Profile from "../Profile";
import socket from "../../socket";
const Chart = () => {
    const token = localStorageUtils.getItem("authorization");
    const navigate = useNavigate();
    const [bitcoinPrices, setBitcoinPrices] = useState([]);
    const [realTimePrice, setRealTimePrice] = useState("Loading...");
    const [showModal, setShowModal] = useState(false);
    const [balance, setBalance] = useState(100000);
    const [countdown, SetCountDown] = useState(60);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [coins, setCoins] = useState([]);
    const getCoin = async () => {
        const path = await productApi.getCoin(token);
        //SetUpdated(true);
        // if (path.data.code === 408) {
        //     toastError("Token hết hạn");
        // }
        setCoins(path);
        //dispatch(setEvent(path.data.data || []));
    };

    useEffect(() => {
        const auth = localStorageUtils.getItem("authorization");
        if (!auth) {
            navigate("/login");
        } else {
            console.log("once please");
        }
        getCoin();
        return () => {
            socket.disconnect();
        };
    }, [socket, token]);

    useEffect(() => {
        if (socket) {
            socket.on("bitcoinPrice", (price) => {
                setRealTimePrice(price);
                socket.emit("receiveCoin");
                setBitcoinPrices((prevPrices) => {
                    const newPrices = [
                        ...prevPrices,
                        {
                            time: `${new Date().getMinutes()} : ${new Date().getSeconds()}`,
                            price,
                        },
                    ];

                    return newPrices.slice(-25);
                });
                setIsButtonDisabled(false);
            });
            socket.on("balance", (balance) => {
                setBalance(balance);
            });
            socket.on("countdown", (countdown) => {
                SetCountDown(countdown);
            });
        }
    }, []);
    useEffect(() => {
        setIsButtonDisabled(false);
    }, [bitcoinPrices]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <MainWrapper>
                <Modal isOpen={showModal} onClose={handleCloseModal} />
                <ChartContainer>
                    <section>
                        <h1>Current Bitcon Price: ${realTimePrice}</h1>
                        <h1>Time remaining : {countdown}</h1>
                        <ChartComponent
                            bitcoinPrices={bitcoinPrices}
                            coins={coins}
                        />
                    </section>
                </ChartContainer>
                <View />
            </MainWrapper>
            <ActionWrapper>
                <Profile />
                <Buttons
                    setRealTimePrice={setRealTimePrice}
                    SetCountDown={SetCountDown}
                    setShowModal={setShowModal}
                    isButtonDisabled={isButtonDisabled}
                    balance={balance}
                    setBalance={setBalance}
                    setIsButtonDisabled={setIsButtonDisabled}
                />
            </ActionWrapper>
        </Container>
    );
};

export default Chart;
