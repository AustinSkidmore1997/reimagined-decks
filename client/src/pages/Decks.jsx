import { useParams, Link } from "react-router-dom";

// Uncomment import statements below after building queries and mutations
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_DECK } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";
import TheNavbar from "../components/NavBar";

const Decks = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { _id: id },
  });

  const matchup = data?.matchups || [];

  const [createDeck, { error }] = useMutation(CREATE_DECK);

  const handleDeck = async (deckName) => {
    try {
      await createDeck({
        variables: { _id: id, name: deckName },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div>
        <TheNavbar />
      </div>
      <div className="card-header bg-dark text-center">
        <h1>Here is your decks!</h1>
      </div>


      <div>
        <div>

        </div>
        <Link to="/search">
          <button className="btn btn-lg btn-danger">Add Cards!</button>
        </Link>
      </div>

    </div>
  );
};

export default Decks;
