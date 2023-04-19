import React, {useEffect, useState} from "react";

import styles from "./Search.module.scss";
import Title from "../../components/Title";
import CardList from "../../components/CardList";
import Subscribe from "../../components/Subscribe";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts, getSearchedPosts, PostSelectors} from "../../redux/reducers/postSlice";
import EmptyState from "../../components/EmptyState";


const Search = () => {
  const dispatch = useDispatch();

  const query = useSelector(PostSelectors.getSearchedValue);

  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const page = 9 * (currentPage - 1)
        if (query !== null) {
            dispatch(getSearchedPosts({ query , page }));
        }
    }, [currentPage]);

    const searchedPosts = useSelector(PostSelectors.getSearchedPosts);

  return (
    <div className={styles.container}>
      <Title title={` '${query}' Search results`} className={styles.title} />
      <CardList cardList={searchedPosts} />
    </div>
  );
};

export default Search;
