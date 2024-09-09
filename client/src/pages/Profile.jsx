import { Link } from "react-router-dom";

// Uncomment import statements below after building queries and mutations
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });


  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome !</h1>
      </div>

      <div className="card-body m-5">
        <h2>Here is a list of Decks:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new deck?</h2>
        <Link to="/decks">
          <button className="btn btn-lg btn-danger">Create Deck!</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
