import { ADD_CARD } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function TCards({ cards }) {
    console.debug(cards);
    const [addCard, {error}] = useMutation(ADD_CARD);
    
    const addACard = async (card) => {console.log(card); 
        /**/ 
    }
    
    return (
        <div className="container">
            <h2>Search Results:</h2>
            {cards?.length > 0 ? (<ul className="searchResults">
                {cards.map((card) => (
                    <li className="searchGroup" key={card.id}>
                        <p>{`${card.name} ${card.manaCost}`}<button className="addBtn" onClick={() => addCard({variables:{id: '66e09a59dcfb643d3e27096a' ,addedCard: {id: card.id, name: card.name}}})}>Add</button></p>
                        <img src={card.imageUrl} style={{ width: '100%' }}></img>

                    </li>


                ))}

            </ul>) : <div>no data</div>}
        </div>
    )
}
