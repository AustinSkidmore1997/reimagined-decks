import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_DECK } from "../utils/queries";
import { CREATE_USER } from "../utils/mutations";
import TCards from "../components/TCards";
import TheNavbar from "../components/NavBar";


const Search = () => {
  const [nameInput, setNameInput] = useState('');
  const [cards, setCards] = useState([]);

  return (
    <div>
      <div>
        <TheNavbar className="" style={{ width: '100%' }} />
      </div>
      <div className="card bg-grey card-rounded w-25">
        <form onSubmit={async (e) => {
          e.preventDefault();
          const result = await fetch(`https://api.magicthegathering.io/v1/cards?name=${nameInput}`)
          const data = await result.json();
          console.log(data);
          //Sorts cards by name in alphabetical order
          const cards = [...data.cards].sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else if (a.name < b.name) {
              return -1;
            } else {
              return 0;
            }
            //gets rid of duplicates in array
          }).filter((item, pos, arr) => !pos || item.name != arr[pos - 1].name)
          // .map((item) => {
          //    return { ...item, show: true }
          // })


          setCards(cards);

        }}>
          <input id="searchInput" placeholder="search for card name..." onChange={(e) => {
            const { name, value } = e.target;
            setNameInput(value);
          }}>
          </input>
          <button type="submit">Submit</button>
        </form>
        {/*displays cards in a list*/}
        <TCards cards={cards} />
      </div>
    </div >
  );
};

export default Search;
