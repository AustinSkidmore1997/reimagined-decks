import { useParams, Link } from "react-router-dom";

// Uncomment import statements below after building queries and mutations
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_DECK } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";

const Decks = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    variables: { _id: id },
  });

  const matchup = data?.matchups || [];

  const [createVote, { error }] = useMutation(CREATE_VOTE);

  const handleVote = async (techNum) => {
    try {
      await createVote({
        variables: { _id: id, techNum: techNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>

      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Decks;
