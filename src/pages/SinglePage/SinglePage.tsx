import React, {FC} from "react";

import styles from "./SinglePage.module.scss";
import Button, {ButtonTypes} from "../../components/Button";
import {ArrowLeftIcon, LikeIcon} from "../../assets/icons";
import Title from "../../components/Title";
import {Rate} from "antd";

type SinglePageTypes = {
    title: string,
    subtitle: string,
    authors: string,
    publisher: string,
    isbn10: string,
    isbn13: string,
    pages: string,
    year: string,
    rating: number,
    desc: string,
    price: string,
    image: string,
    url: string,
    pdf: object,
}

type SinglePageProps = {
    data: SinglePageTypes
}



const SinglePage:FC<SinglePageProps> = ({data}) => {
    const {title,subtitle,authors,publisher,pages,year,rating,desc,price,image,url,pdf} = data;
    return (
        <div className={styles.container}>
            <Button title={<ArrowLeftIcon />} onClick={()=>{}} types={ButtonTypes.Arrow} />
            <Title title={title} />
            <div className={styles.mainInfoContainer}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={title}/>
                    <Button title={<LikeIcon />} onClick={()=>{}} types={ButtonTypes.Like} />
                    <Rate disabled defaultValue={rating}/>
                </div>
                <div className={styles.infoContainer}>
                    <span className={styles.price}>{price}</span>

                </div>
            </div>
        </div>
    );
};

export default SinglePage;
