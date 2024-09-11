import { Link } from "react-router-dom";

// Uncomment import statements below after building queries and mutations
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import TheNavbar from "../components/NavBar";
import Search from "./Search";
import Decks from "./Decks";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });


  return (
    <div className="card bg-white card-rounded w-50">
      <div>
        <TheNavbar />
      </div>
      <div className="card-header bg-dark text-center">
        <h1>Welcome !</h1>
      </div>
        <div>
          <div className="card-body m-5">
            <h2>Here is a list of Decks:</h2>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Decks />
            )}
          </div>
          
        </div>
        <div>
          <Search />
        </div>
    </div>
  );
};

export default Profile;
