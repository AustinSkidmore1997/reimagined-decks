import { useState } from "react";
import { createDeck } from "../utils/api";

export default function Deck(decks) {
    const [nameInput, setNameInput] = useState('');

    return (<div className="container">
        <div className="card-header">
            {decks?.length > 0 ? (<ul className="deckList">
                {decks.map((deck) => (
                    <>
                        <h3>{deck.name}</h3>
                        <h4>Card List:</h4>
                        {deck.cards?.length > 0 ? (<ul className="cardList">
                            {deck.cards.map((card) => (
                                <li className="deckCard" key={card.id}>
                                    <p>{`${card.name} ${card.manaCost}`}<button className="removeBtn">Remove</button></p>
                                    <img src={card.imageUrl} style={{ width: '100%' }}></img>

                                </li>


                            ))}

                        </ul>) : <div>no data</div>}
                    </>


                ))}

            </ul>) : <h3>no decks</h3>}
        </div>
        <form >
            <input id="deckInput" placeholder="name your new deck here!" onChange={(e) => {
                const { name, value } = e.target;
                setNameInput(value);
            }}>
            </input>
            <button type="submit">Add Deck</button>
        </form>
    </div>
    )
}