import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const addAuthorMutation = gql`
    mutation AddAuthor($name: String!, $age: Number!){
        addAuthor(name: $name, age: $age){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;


const getAuthorQuery = gql`
    query GetAuthor($id: ID){
        author(id: $id) {
            id
            name
            age
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, addAuthorMutation, getBookQuery, getAuthorQuery };
