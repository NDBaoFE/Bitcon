import React, { useState, useEffect, useRef } from "react";

import { ButtonContainer, Upbutton, Downbutton } from "../style";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InputWithButtons from "./InputWithButton";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { createSocketConnection, getSocket } from "../../socket";
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

    useEffect(() => {
        getSocket().on("bitcoinPrice", (price) => {
            setRealTimePrice(price);
            getSocket().emit("receiveCoin");
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
        getSocket().on("balance", (balance) => {
            setBalance(balance);
        });
        getSocket().on("countdown", (countdown) => {
            SetCountDown(countdown);
        });
    }, []);
    useEffect(() => {
        setIsButtonDisabled(false);
    }, [bitcoinPrices]);

    const handleSentData = (direction) => {
        setShowModal(true);
        getSocket().emit("placeBet", { amount: amount, direction });
        setIsButtonDisabled(true);
    };
    return (
        <ButtonContainer>
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
