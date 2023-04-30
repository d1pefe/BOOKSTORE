import React, { useEffect} from "react";

import styles from "./Main.module.scss";

import Title from "../../components/Title";
import CardList from "../../components/CardList";
import Subscribe from "../../components/Subscribe";

import {useDispatch, useSelector} from "react-redux";
import {getAllPosts, PostSelectors} from "../../redux/reducers/postSlice";


const Main = () => {
  const dispatch = useDispatch();

  const postsList = useSelector(PostSelectors.getAllPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className={styles.container}>
      <Title title={"NEW RELEASES BOOKS"} className={styles.title} />
      <CardList cardList={postsList} />
      <Subscribe className={styles.subscribe} />
    </div>
  );
};

export default Main;
