import React, {useEffect} from "react";

import styles from "./Search.module.scss";
import Title from "../../components/Title";
import CardList from "../../components/CardList";
import {useDispatch, useSelector} from "react-redux";
import { getSearchedPosts, PostSelectors } from "../../redux/reducers/postSlice";


const Search = () => {
  const dispatch = useDispatch();

  const query = useSelector(PostSelectors.getSearchedValue);


    useEffect(() => {
        if (query !== null) {
            dispatch(getSearchedPosts(query));
        }
    }, []);

    const searchedPosts = useSelector(PostSelectors.getSearchedPosts);

  return (
    <div className={styles.container}>
      <Title title={` '${query}' Search results`} className={styles.title} />
      <CardList cardList={searchedPosts} />
    </div>
  );
};

export default Search;
