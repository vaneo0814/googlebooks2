import axios from 'axios';

export const getSavedBooks = () => {
    return axios.get("/api/books")
}

export const saveBook = (bookData) => {
    return axios.post("/api/savedBooks", bookData)
}

export const deleteBook = (id) => {
    return axios.delete(`/api/books/` + id)
}

export const searchBooks = (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + query)
}
