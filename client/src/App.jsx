import { useQuery, gql } from '@apollo/client';
import './App.css'

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  return (
    <>
        {
          JSON.stringify(data)
        }
    </>
  )
}

export default App
