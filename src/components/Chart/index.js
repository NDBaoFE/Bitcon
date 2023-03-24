import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import productApi from "../../utils/api/productApi";
import localStorageUtils from "../../utils/localStorageUtils";
import Modal from "../Modal";
import { Container, ChartContainer } from "../style";
import "../chart.css";
import ChartComponent from "./Chart";
import Buttons from "../Button/Buttons";
const Chart = () => {
    const token = localStorageUtils.getItem("token");

    const [bitcoinPrices, setBitcoinPrices] = useState([]);
    const [realTimePrice, setRealTimePrice] = useState("Loading...");
    const [showModal, setShowModal] = useState(false);
    const [balance, setBalance] = useState(100000);
    const [countdown, SetCountDown] = useState(60);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const socketRef = useRef();

    useEffect(() => {
        getALlEvent();
    }, []);
    const getALlEvent = async () => {
        const path = await productApi.getCoin(token);
        //SetUpdated(true);
        // if (path.data.code === 408) {
        //     toastError("Token hết hạn");
        // }

        //dispatch(setEvent(path.data.data || []));
    };

    useEffect(() => {
        socketRef.current = io("http://localhost:8080");

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    useEffect(() => {
        socketRef.current.on("bitcoinPrice", (price) => {
            setRealTimePrice(price);
            socketRef.current.emit("receiveCoin");
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
        socketRef.current.on("balance", (balance) => {
            setBalance(balance);
        });
        socketRef.current.on("countdown", (countdown) => {
            SetCountDown(countdown);
        });
    }, []);
    useEffect(() => {
        setIsButtonDisabled(false);
    }, [bitcoinPrices]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <Modal isOpen={showModal} onClose={handleCloseModal} />
            <ChartContainer>
                <section>
                    <h1>Current Bitcon Price: ${realTimePrice}</h1>
                    <h1>Time remaining : {countdown}</h1>
                    <ChartComponent bitcoinPrices={bitcoinPrices} />
                </section>
            </ChartContainer>
            <Buttons
                setRealTimePrice={setRealTimePrice}
                SetCountDown={SetCountDown}
                setShowModal={setShowModal}
                isButtonDisabled={isButtonDisabled}
                balance={balance}
                setBalance={setBalance}
                setIsButtonDisabled={setIsButtonDisabled}
            />
        </Container>
    );
};

export default Chart;
