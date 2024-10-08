import { ADD_CARD } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function TCards({ cards }) {
    console.debug(cards);
    const [addCard, { error, data }] = useMutation(ADD_CARD);

    const addACard = async (card) => {
        try {
            
            const result = await addCard({
                variables: { 
                    id: '66e09a59dcfb643d3e27096a',  
                    addedCard: {
                        artist: card.artist,
                        cmc: card.cmc,
                        imageUrl: card.imageUrl,
                        layout: card.layout,
                        legalities: card.legalities,
                        manaCost: card.manaCost,
                        multiverseid: card.multiverseid,
                        name: card.name,
                        number: card.number,
                        originalText: card.originalText,
                        originalType: card.originalType,
                        printings: card.printings,
                        rarity: card.rarity,
                        set: card.set,
                        setName: card.setName,
                        text: card.text,
                        type: card.type,
                        types: card.types,
                        count: 1
                    }
                }
            });
            
            if (data) {
                console.log('Card added successfully:', data);
            }
        } catch (err) {
            console.error('Error adding card:', err);
        }
    };

    return (
        <div className="container">
            <h2>Search Results:</h2>
            {cards?.length > 0 ? (
                <ul className="searchResults">
                    {cards.map((card) => (
                        <li className="searchGroup" key={card.id}>
                            <p>{`${card.name} ${card.manaCost}`}
                                <button
                                    className="addBtn"
                                    onClick={() => addACard(card)}
                                >
                                    Add
                                </button>
                            </p>
                            <img src={card.imageUrl} alt={card.name} style={{ width: '100%' }} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No data</div>
            )}
            {error && <p>Error adding card: {error.message}</p>}
        </div>
    );
}
