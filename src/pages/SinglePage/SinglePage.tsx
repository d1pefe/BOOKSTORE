import React, { useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./SinglePage.module.scss";

import Button, { ButtonTypes } from "../../components/Button";
import {
  ArrowLeftIcon,
  FacebookIcon,
  LikeIcon,
  MoreIcon,
  TwitterIcon,
} from "../../assets/icons";
import Title from "../../components/Title";
import { Rate } from "antd";
import Tabs from "../../components/Tabs";
import { TabsNames } from "../../components/Tabs/Tabs";
import Subscribe from "../../components/Subscribe";
import CardList from "../../components/CardList";
import SelectedPostModal from "./SelectedPostModal";

import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePost,
  PostSelectors,
  setFavoriteStatus,
  setPostVisibility,
  setSelectedPost,
  setSinglePost,
} from "../../redux/reducers/postSlice";

import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { addToCart } from "../../redux/reducers/cartSlice";

const TABS_LIST = [
  {
    key: TabsNames.DESCRIPTION,
    title: "Description",
    disabled: false,
  },
  {
    key: TabsNames.AUTHORS,
    title: "Authors",
    disabled: false,
  },
  {
    key: TabsNames.REVIEWS,
    title: "Reviews",
    disabled: false,
  },
];

const MOCK_ARRAY = [
  {
    title: "Designing Across Senses",
    subtitle: "A Multimodal Approach to Product Design",
    isbn13: "9781491954249",
    price: "$27.59",
    image: "https://itbook.store/img/books/9781491954249.png",
    url: "https://itbook.store/books/9781491954249",
  },
  {
    title: "Web Scraping with Python, 2nd Edition",
    subtitle: "Collecting More Data from the Modern Web",
    isbn13: "9781491985571",
    price: "$33.99",
    image: "https://itbook.store/img/books/9781491985571.png",
    url: "https://itbook.store/books/9781491985571",
  },
  {
    title: "Programming iOS 11",
    subtitle: "Dive Deep into Views, View Controllers, and Frameworks",
    isbn13: "9781491999226",
    price: "$59.17",
    image: "https://itbook.store/img/books/9781491999226.png",
    url: "https://itbook.store/books/9781491999226",
  },
];

const SinglePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoggedIn } = useAuth();

  const [activeTab, setActiveTab] = useState(TabsNames.DESCRIPTION);
  const onTabClick = (key: TabsNames) => setActiveTab(key);

  const data = useSelector(PostSelectors.getSinglePost);
  useEffect(() => {
    params.id && dispatch(getSinglePost(params.id));
    return () => {
      dispatch(setSinglePost(null));
    };
  }, []);

  const favorites = useSelector(PostSelectors.getFavorites);
  const favoritesIndex = favorites.findIndex(
    (book) => book.isbn13 === data?.isbn13
  );

  const onLikeClick =
    (status: boolean, card = data) =>
    () => {
      dispatch(setFavoriteStatus({ status, card }));
    };

  const onAddToCartButtonClick = () => () => {
    if (data) {
      dispatch(addToCart({ data }));
    }
  };

  const pdfValuesArray = !!data?.pdf ? Object.values(data?.pdf) : [];
  const pdfValue = pdfValuesArray.length > 0 ? pdfValuesArray[0] : null;

  const isVisible = useSelector(PostSelectors.getVisibleSelectedPost);

  const onPdfClick = () => {
    dispatch(setSelectedPost(pdfValue));
    dispatch(setPostVisibility(!isVisible));
  };

  return data !== null ? (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <Button
          title={<ArrowLeftIcon />}
          onClick={() => {}}
          types={ButtonTypes.Arrow}
        />
        <Title title={data.title} className={styles.title} />
      </div>
      <div className={styles.mainInfoContainer}>
        <div className={styles.imageContainer}>
          <img src={data.image} alt={data.title} />
          <Button
            title={<LikeIcon />}
            onClick={onLikeClick(true)}
            types={ButtonTypes.Like}
            className={classNames(styles.buttonLike, {
              [styles.activeButtonLike]: favoritesIndex > -1,
            })}
            disabled={!isLoggedIn}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.priceContainer}>
            <Title title={data.price} />
            <Rate disabled defaultValue={data.rating} />
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.infoWrapperBlock}>
              <span className={styles.infoName}>Authors</span>
              <span className={styles.info}>{data.authors}</span>
            </div>
            <div className={styles.infoWrapperBlock}>
              <span className={styles.infoName}>Publisher</span>
              <span className={styles.info}>{data.publisher}</span>
            </div>
            <div className={styles.infoWrapperBlock}>
              <span className={styles.infoName}>Year</span>
              <span className={styles.info}>{data.year}</span>
            </div>
            <div className={styles.infoWrapperBlock}>
              <span className={styles.infoName}>Pages</span>
              <span className={styles.info}>{data.pages}</span>
            </div>
          </div>
          <Button
            title={"ADD TO CART"}
            onClick={onAddToCartButtonClick()}
            types={ButtonTypes.Main}
            disabled={!isLoggedIn}
          />
          {pdfValue && (
            <div className={styles.preview} onClick={onPdfClick}>
              Preview book
            </div>
          )}
        </div>
      </div>
      <div className={styles.secondaryInfo}>
        <Tabs data={TABS_LIST} onClick={onTabClick} activeTab={activeTab} />
        <div className={styles.description}>{data.desc}</div>
        <div className={styles.share}>
          <FacebookIcon />
          <TwitterIcon />
          <MoreIcon />
        </div>
      </div>
      <Subscribe />
      <div className={styles.similar}>
        <Title title={"SIMILAR BOOKS"} className={styles.similarTitle} />
        <CardList cardList={MOCK_ARRAY} />
      </div>
        <SelectedPostModal />
    </div>
  ) : null;
};

export default SinglePage;
