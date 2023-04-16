import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../../components/Modal";
import {
  PostSelectors,
  setPostVisibility,
  setSelectedPost,
} from "../../../redux/reducers/postSlice";
import Card from "../../../components/Card";

const SelectedPostModal = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector(PostSelectors.getVisibleSelectedPost);
    const selectedPost = useSelector(PostSelectors.getSelectedPost);
    const onClose = () => {
      dispatch(setSelectedPost(null));
      dispatch(setPostVisibility(false));
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      {selectedPost ? <Card card={selectedPost} /> : null}
    </Modal>
  );
};

export default SelectedPostModal;
