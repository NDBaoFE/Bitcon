import React from "react";
import { useEffect, useState } from "react";
import productApi from "../../utils/api/productApi";
import ScrollToTop from "../../components/ScrollToTop";
import {
    Container,
    Hero,
    SubHero,
    Thubmnail,
    Description,
    Author,
    PubDate,
} from "./styled";
import { useParams } from "react-router-dom";
import localStorageUtils from "../../utils/localStorageUtils";
import beautify from "js-beautify";
function Blog() {
    const [detail, setDetail] = useState({});
    const params = useParams();
    const beautifiedHtml = beautify.html(detail.content);

    const id = parseInt(params.id, 10);
    const token = localStorageUtils.getItem("authorization");
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await productApi.getBlogDetail(token, id);
                console.log(response.data.data[0]);
                setDetail(response.data.data[0]);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    return (
        <Container>
            <Hero>{detail.title}</Hero>
            <Description>
                <Author>{detail.author}</Author>
                <PubDate>{detail.pubDate}</PubDate>
            </Description>
            <SubHero>{detail.subHeadLine}</SubHero>
            <Thubmnail src={detail.imageUrl} />
            <div
                dangerouslySetInnerHTML={{ __html: beautifiedHtml }}
                className="article-content"
            />
            <ScrollToTop />
        </Container>
    );
}

export default Blog;
