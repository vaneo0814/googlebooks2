import axios from 'axios';

export const getSavedBooks = () => {
    return axios.get("/api/books")
}

export const saveBook = (bookData) => {
    return axios.post("/api/books", bookData)
}

export const deleteBook = (bookId) => {
    return axios.delete(`/api/books/` + bookId)
}

export const searchBooks = (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + query)
}
