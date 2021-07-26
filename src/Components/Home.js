import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css';
import { Link } from 'react-router-dom';
import Welcome from './gary-bendig-WPmPsdX2ySw-unsplash.jpg'

function Home ({ isUser, username, balance, logout }) {
  const handleLogout = () => {
    logout();
  }

  // let firstName = username.split(" ")[0];

  return (
    <>
      {!isUser && <Card className="homepage card-page">
        <h1 className="card-head">Welcome to Goose Banking</h1>
        <div className="card-body">
          <img src={Welcome} className="welcome-img" alt="welcome image" />
          <h2>Here at Goose Banking, we take your money as seriously as geese take on their territory. We offer a wide array of banking services for every  need along with 24/7 customer service. Your growth is our growth so join our flock today!</h2>

          <div className="btn-container">
            <Link to="/CreateAccount/">
              <button  className="rd-btn">
                Join The Flock
              </button>
            </Link>
            
            <Link to="/Login/">
              <button  className="rd-btn">
                Login
              </button>
            </Link>
          </div>
        </div>
      </Card>}

      {isUser && <Card className="homepage user-home card-page">
        <h1  className="card-head">Welcome {username}!</h1>
        <div className="card-body user-home-body">
          <h3> Current Account Balance: ${balance}</h3>
          <hr/>

          <div className="btn-container">
            <Link to="/Deposit/">
              <button>
                Make Deposit
              </button>
            </Link>

            <Link to="/Withdraw/">
              <button>
                Make Withdrawal
              </button>
            </Link>

            <Link to="/CreateAccount/">
              <button>
                Add another account
              </button>
            </Link>

            <button onClick={handleLogout}>
                Logout
            </button>
          </div>
        </div>
        
      </Card>}
    </>
  );
}

export default Home;