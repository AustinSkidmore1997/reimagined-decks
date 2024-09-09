export default function TCards({ cards }) {
    console.debug(cards);

    return (
        <div className="container">
            <h2>Search Results:</h2>
            {cards?.length > 0 ? (<ul className="searchResults">
                {cards.map((card) => (
                    <li className="searchGroup" key={card.id}>
                        <p>{`${card.name} ${card.manaCost}`}<button>Add</button></p>
                        <img src={card.imageUrl} style={{ width: '100%' }}></img>

                    </li>


                ))}

            </ul>) : <div>no data</div>}
        </div>
    )
}
