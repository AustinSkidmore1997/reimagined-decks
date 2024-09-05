import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_DECK } from "../utils/queries";
import { CREATE_USER } from "../utils/mutations";
import TCards from "../components/TCards";

const Search = () => {
  const [nameInput, setNameInput] = useState('');
  let cards2 = []

  return (
    <div className="card bg-grey card-rounded w-25">
      <form onSubmit={async (e) => {
        e.preventDefault();
        const result = await fetch(`https://api.magicthegathering.io/v1/cards?name=${nameInput}`)
        const data = await result.json();
        console.log(data);
        const cards = [...data.cards].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }

        }).filter((item, pos, arr) => !pos || item.name != arr[pos - 1].name)


        cards2 = cards;
        console.log(cards2);
      }}>
        <input id="searchInput" placeholder="search for card name..." onChange={(e) => {
          const { name, value } = e.target;
          setNameInput(value);
        }}>
        </input>
        <button type="submit">Submit</button>
      </form>
      <div>
        {async (e) => await console.log(cards2)}
      </div>
    </div>
  );
};

export default Search;
