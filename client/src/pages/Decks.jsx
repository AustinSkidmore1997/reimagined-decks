import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_DECK } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import Deck from '../components/Deck';

const Decks = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { _id: id },
  });

  const [createDeck, { error }] = useMutation(CREATE_DECK);
  const [nameInput, setNameInput] = useState('');
  const handleDeck = async (deckName) => {
    try {
      await createDeck({
        variables: { _id: id, name: deckName },
      });
      console.log(data);
    } catch (err) {
      console.error('Error creating deck:', err);
    }
  };

  if (loading) return <p>Loading...</p>;


  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Your Decks</h1>
      </div>

      

      <div>

        <Deck />
        : (
        <p>No decks found.</p>
        )
      </div>


    </div>
  );
};

export default Decks;
