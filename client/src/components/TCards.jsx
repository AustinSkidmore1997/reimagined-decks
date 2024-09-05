export default function TCards([cards]) {
    console.log([cards]);
    return (
        <div className="container">
            <h2>Search Results:</h2>
            <ul className="searchResults">
                {/* {cards.map((card) => (
                    <li className="searchGroup" key={card.id}>
                        {`${card.name} ${card.manaCost}`}<button>Add</button>
                        <img src={card.imageUrl}></img>
                    </li>

                ))} */}
            </ul>
        </div>
    )
}
