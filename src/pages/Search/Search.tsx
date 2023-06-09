import React, {useEffect, useState} from "react";
import classNames from "classnames";

import styles from "./Search.module.scss";

import Title from "../../components/Title";
import CardList from "../../components/CardList";
import ReactPaginate from "react-paginate";

import EmptyState from "../../components/EmptyState"
import {useDispatch, useSelector} from "react-redux";
import {
    getSearchedPosts,
    PostSelectors,
} from "../../redux/reducers/postSlice";

const Search = () => {
    const dispatch = useDispatch();

    const query = useSelector(PostSelectors.getSearchedValue);

    const [currentPage, setCurrentPage] = useState(1);

    const postsCount = useSelector(PostSelectors.getSearchedPostsCount);
    const pagesCount = Math.ceil(postsCount / 10);

    const searchedPosts = useSelector(PostSelectors.getSearchedPosts);

    const onPageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected + 1);
    };

    useEffect(() => {
        const page = currentPage;
        if (query !== null) {
            dispatch(getSearchedPosts({page, query}));
        }
    }, [currentPage, query]);

    return (
        <div className={styles.container}>
            <Title title={`'${query}' Search results`} className={styles.title}/>
            {searchedPosts.length>0 ?
                <div>
                    <CardList cardList={searchedPosts}/>
                    <ReactPaginate
                        pageCount={pagesCount}
                        onPageChange={onPageChange}
                        containerClassName={styles.pagesContainer}
                        pageClassName={styles.pageNumber}
                        breakClassName={styles.pageNumber}
                        breakLinkClassName={styles.linkPage}
                        activeLinkClassName={styles.linkPage}
                        pageLinkClassName={styles.linkPage}
                        activeClassName={styles.activePageNumber}
                        nextClassName={classNames(styles.arrowButton, {
                            [styles.blockedButton]: currentPage === pagesCount,
                        })}
                        previousClassName={classNames(styles.arrowButton, {
                            [styles.blockedButton]: currentPage === 1,
                        })}
                        previousLinkClassName={styles.linkPage}
                        nextLinkClassName={styles.linkPage}
                        forcePage={currentPage - 1}
                    />
                </div> : <EmptyState />}
        </div>
    );
};

export default Search;
