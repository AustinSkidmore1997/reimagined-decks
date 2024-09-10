import { Link } from "react-router-dom";
import TheNavbar from "../components/NavBar";



  const Landing = (props) => {
    const { loggedIn, email } = props
    
  
 
    
  



  return (


    
    <div className="Login-container">
      <TheNavbar />
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>To Our Deck building website.</div>
      <div className={'buttonContainer'}>
        <Link
          className={'inputButton'}
          type="button"
          value={loggedIn ? 'Log out' : 'Log in'}

         
          
          />

          
        
        {loggedIn ? <div>Your email address is {email}</div> : <div />}

        
      </div>
    </div>
         
        
    </div>
  );

}
  
export default Landing;