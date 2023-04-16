import {create} from "apisauce";

const API = create({
    baseURL: "https://api.itbook.store/1.0/",
});

const getPosts = () => {
    return API.get("new");
};

const getPost = (id: string) => {
    return API.get(`/books/${id}/`)
}


export default {
    getPosts,
    getPost
};