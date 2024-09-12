import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_DECK } from '../utils/mutations';

const Deck = ({ decks }) => {
    const [nameInput, setNameInput] = useState('');
    const [createDeck] = useMutation(CREATE_DECK);
    // const []
    const handleCreateDeck = async (e) => {
        e.preventDefault();
        try {
            await createDeck({
                variables: { _id: '66e0983b67d9ff45e8cd6834', name: nameInput },
            });
            setNameInput('');
        } catch (err) {
            console.error('Error creating deck:', err);
        }
    };

    return (
        <div className="container">
            <div className="card-header">
                {decks?.length > 0 ? (
                    <ul className="deckList">
                        {decks.map((deck) => (
                            <li key={deck._id} className="deckItem">
                                <h3>{deck.name}</h3>
                                <h4>Card List:</h4>
                                {deck.cards?.length > 0 ? (
                                    <ul className="cardList">
                                        {deck.cards.map((card) => (
                                            <li className="deckCard" key={card._id}>
                                                <p>
                                                    {`${card.name} ${card.manaCost}`}
                                                    <button className="removeBtn">Remove</button>
                                                </p>
                                                <img src={card.imageUrl} alt={card.name} style={{ width: '100%' }} />
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div>No data</div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>No decks</h3>
                )}
            </div>
            <form onSubmit={handleCreateDeck}>
                <input
                    id="deckInput"
                    placeholder="Name your new deck here!"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <button type="submit">Add Deck</button>
            </form>
        </div>
    );
};

export default Deck;