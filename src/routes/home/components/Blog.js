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
import { Link, useNavigate, useParams } from "react-router-dom";
import { scrollToTop } from "../../../utils/others/scrollToTop";
import productApi from "../../../utils/api/productApi";
import LocalStorageUtils from "../../../utils/localStorageUtils/index";
import Loading from "../../../components/Loading";

function Blog() {
    const params = useParams();
    const [blog, setBlog] = useState(null); // set initial state to null
    const [current, setCurrent] = useState(parseInt(params.page, 10) || 1);
    const navigate = useNavigate();
    const token = LocalStorageUtils.getItem("authorization");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await productApi.getblogs(token, current);
                console.log(response.data.data);
                setBlog(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [current]);

    const handlePageChange = (page) => {
        setCurrent(page);
        console.log(page);
        navigate(`/home/${page}`);
        scrollToTop();
    };

    return (
        <Container>
            <Hero>Our New Blog</Hero>
            {blog ? (
                <BlogWrapper>
                    {blog.map((item, index) => {
                        const placeholder =
                            "https://ui8-unity-exchange.herokuapp.com/img/promotions-pic-1.jpg";
                        return (
                            <BlogItem key={index}>
                                <ItemImg src={item.imageUrl || placeholder} />
                                <Body>
                                    <Date>{item.pubDate}</Date>
                                    <Title>{item.title}</Title>

                                    <ReadMore>
                                        <Link to={`/blog/${item.id}`}>
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
            ) : (
                <Loading />
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
