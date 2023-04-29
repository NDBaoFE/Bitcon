import React, { useEffect, useState } from "react";
import {
    Container,
    Hero,
    BlogWrapper,
    BlogItem,
    ItemImg,
    Date,
    Title,
    ReadMore,
    Body,
    StyledPagination,
} from "./styled";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../../utils/others/scrollToTop";

function Blog() {
    const [blog, setBlog] = useState();
    const [current, setCurrent] = useState(1);
    const navigate = useNavigate();
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetch(
            `https://newsapi.org/v2/everything?q=crypto+blog&pageSize=10&page=${current}&sortBy=publishedAt&language=en&apiKey=${apiKey}`
        )
            .then((res) => res.json())
            .then((data) => setBlog(data));
    }, [current]);
    //naviage the blogs
    const handlePageChange = (page) => {
        setCurrent(page);
        navigate(`/home/${page}`);
        scrollToTop();
    };
    const placeholder =
        "https://ui8-unity-exchange.herokuapp.com/img/promotions-pic-1.jpg";
    return (
        <Container>
            <Hero>Our New Blog</Hero>
            {blog && (
                <BlogWrapper>
                    {blog.articles.map((item, index) => {
                        return (
                            <BlogItem key={index}>
                                <ItemImg src={item.urlToImage || placeholder} />
                                <Body>
                                    <Date>{item.publishedAt}</Date>
                                    <Title>{item.title}</Title>

                                    <ReadMore>
                                        <Link to={item.url}>
                                            <ReadMoreIcon
                                                fontSize="large"
                                                style={{ marginRight: "10px" }}
                                            />
                                            Read More
                                        </Link>
                                    </ReadMore>
                                </Body>
                            </BlogItem>
                        );
                    })}
                </BlogWrapper>
            )}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                    marginBottom: "50px",
                }}
            >
                <StyledPagination
                    current={current}
                    onChange={handlePageChange}
                    total={50}
                />
            </div>
        </Container>
    );
}

export default Blog;
