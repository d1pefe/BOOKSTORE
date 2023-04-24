import React from "react";
import { useDispatch, useSelector } from "react-redux";


import Modal from "../../../components/Modal";
import {
  PostSelectors,
  setPostVisibility,
  setSelectedPost,
} from "../../../redux/reducers/postSlice";
import styles from "./SelectedPostModal.module.scss";


const SelectedPostModal= () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(PostSelectors.getVisibleSelectedPost);
  const selectedPost = useSelector(PostSelectors.getSelectedPost);
  const onClose = () => {
    dispatch(setSelectedPost(null));
    dispatch(setPostVisibility(false));
  };

  return (
    <div className={styles.container}>
        <Modal isVisible={isVisible} onClose={onClose}>
            {selectedPost ? (
                <iframe src={selectedPost}>
                    Ваш браузер не поддерживает плавающие фреймы!
                </iframe>
            ) : null}
        </Modal>
    </div>
  );
};

export default SelectedPostModal;
