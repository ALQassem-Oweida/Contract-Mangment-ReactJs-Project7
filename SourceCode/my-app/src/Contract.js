import { useState } from "react";
import "./components/Popup.css";

import CreateUser from "./components/CreateUser";
import axios from "axios";
import { useEffect } from "react";
import SingleContract from "./components/SingleContract";

function Contract() {
  const [data, setData] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);


  const inputHandler = (event) => {
    setData(event.target.value);
  };
  const [contracts, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost/project7API/cont-user.php")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      });
  }

  return (
    <div className="contract-all">
      
      <section id="portfolio" className="section-bg mt-5">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title mb-5">Contracts</h3>

            <button
              onClick={() => {
                setButtonPopup(true);
              }}
              className="btn1 mt-5"
            >
              {" "}
              Add Contract
            </button>
            <CreateUser
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
              name={data}
            ></CreateUser>
          </header>

          <div class="container">
<div class="row">
     
            {contracts.map((user, key) => (

                      <SingleContract key={key} user={user} />
            ))
            }
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contract;
