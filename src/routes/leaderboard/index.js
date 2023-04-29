import React, { useEffect, useState } from "react";
import {
    Container,
    TopContainer,
    Hero,
    Top,
    Player,
    TopCard,
    BodyCard,
    StyledAvatar,
    ActionPart,
    AntdTable,
    StyledLeaderBoard,
    FlexContainer,
    AbsoluteAvatar,
    HeroSection,
    Description,
    Left,
    Right,
    Illustrator,
    Button,
} from "./styled";
import GoldMedal from "../../assets/images/gold.png";
import SilverMedal from "../../assets/images/silver.png";
import BronzeMedal from "../../assets/images/bronze.png";
import Rank from "../../assets/images/rank.png";
import localStorageUtils from "../../utils/localStorageUtils";
import productApi from "../../utils/api/productApi";
import { calPercentWin } from "../../utils/others";
import Loading from "../../components/Loading";
function LeaderBoard() {
    const [data, setData] = useState();
    const [top3, setTop3] = useState([]);
    const columns = [
        {
            title: "Rank",
            dataIndex: "rank",
            key: "rank",
            width: 40,
            render: (text, record) => {
                if (text === 1) {
                    return (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={GoldMedal}
                                alt="gold-medal"
                                style={{ width: "28px" }}
                            />
                        </div>
                    );
                } else if (text === 2) {
                    return (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={SilverMedal}
                                alt="silver-medal"
                                style={{ width: "28px" }}
                            />
                        </div>
                    );
                } else if (text === 3) {
                    return (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={BronzeMedal}
                                alt="bronze-medal"
                                style={{ width: "28px" }}
                            />
                        </div>
                    );
                } else {
                    return (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {text}
                        </div>
                    );
                }
            },
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <FlexContainer>
                    <StyledAvatar
                        src={
                            record.image ||
                            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                        }
                    />
                    {text}
                </FlexContainer>
            ),
        },
        {
            title: "Balance",
            dataIndex: "balance",
            key: "balance",
        },
        {
            title: "Win Rate (%)",
            dataIndex: "winrate",
            key: "winrate",
        },
        {
            title: "Region",
            dataIndex: "region",
            key: "region",
        },
    ];

    const getLeaderboard = async () => {
        const token = localStorageUtils.getItem("authorization");
        const path = await productApi.getLeaderBoard(token);
        return path.data.account;
    };
    const setLeaderBoard = async () => {
        const res = await getLeaderboard();
        const data = [];
        res.forEach((player, index) => {
            const object = {
                key: `${index}`,
                rank: index + 1,
                name: player.Name,
                balance: player.balance,
                image: player.image,
                winrate: calPercentWin(player.winRound, player.roundPlayed),
                region: "UK",
            };
            data.push(object);
        });
        setData(data);
        const temp = data.slice(0, 3);
        temp[0] = temp.splice(1, 1, temp[0])[0];
        console.log(temp);
        setTop3(temp);
    };
    useEffect(() => {
        setLeaderBoard();
    }, []);
    return (
        <Container>
            <HeroSection>
                <Left>
                    <Hero>LEADERBOARD</Hero>
                    <Description>
                        Ranking for all gambler,users and rankers of our app !!
                    </Description>
                    <Button>My Profile</Button>
                </Left>
                <Right>
                    <Illustrator src={Rank} />
                </Right>
            </HeroSection>
            {data ? (
                <>
                    <TopContainer>
                        <Top>
                            {top3.map((player, index) => {
                                return (
                                    <Player
                                        key={player.name}
                                        style={{
                                            marginTop:
                                                index === 0
                                                    ? "50px"
                                                    : index === 2
                                                    ? "80px"
                                                    : "0px",
                                        }}
                                    >
                                        <TopCard>
                                            <h1>${player.balance}</h1>
                                        </TopCard>
                                        <BodyCard>
                                            <AbsoluteAvatar
                                                src={player.image}
                                                size={80}
                                            />
                                            <h2>{player.name}</h2>
                                            <h5>{player.winrate}%</h5>
                                            <ActionPart></ActionPart>
                                        </BodyCard>
                                    </Player>
                                );
                            })}
                        </Top>
                    </TopContainer>

                    <StyledLeaderBoard>
                        {data !== [] && (
                            <AntdTable columns={columns} dataSource={data} />
                        )}
                    </StyledLeaderBoard>
                </>
            ) : (
                <Loading />
            )}
        </Container>
    );
}

export default LeaderBoard;
