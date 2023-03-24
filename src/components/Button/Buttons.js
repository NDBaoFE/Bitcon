import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import { ButtonContainer, Upbutton, Downbutton } from "../style";
import "../chart.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InputWithButtons from "./InputWithButton";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Buttons({
    setRealTimePrice,
    SetCountDown,
    setShowModal,
    isButtonDisabled,
    balance,
    setIsButtonDisabled,
    setBalance,
}) {
    const [amount, setAmount] = useState(100);

    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    };
    const [bitcoinPrices, setBitcoinPrices] = useState([]);

    const socketRef = useRef();

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

    const handleSentData = (direction) => {
        setShowModal(true);
        socketRef.current.emit("placeBet", { amount: amount, direction });
        setIsButtonDisabled(true);
    };
    return (
        <ButtonContainer>
            <h2>Balance:</h2>
            <h2> ${balance}</h2>
            <InputWithButtons value={amount} onChange={handleAmountChange} />
            <Upbutton
                onClick={() => handleSentData("higher")}
                disabled={isButtonDisabled}
            >
                <TrendingUpIcon />
                Higher
            </Upbutton>
            <Downbutton
                onClick={() => handleSentData("lower")}
                disabled={isButtonDisabled}
            >
                <TrendingDownIcon />
                Lower
            </Downbutton>
        </ButtonContainer>
    );
}

export default Buttons;
