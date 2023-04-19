import {create} from "apisauce";

const API = create({
    baseURL: "https://api.itbook.store/1.0/",
});

const getPosts = () => {
    return API.get("new");
};

const getPost = (id: string) => {
    return API.get(`books/${id}`)
}

const getSearchList = (query? : string, page?: number) => {
  return API.get(`/search/${query}/${page}`);
}

// eslint-disable-next-line
export default {
    getPosts,
    getPost,
    getSearchList
};