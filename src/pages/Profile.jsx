import React from "react";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { useRef } from "react";
import EditButton from "../components/EditInput";

const Profile = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const [edit, setEdit] = useState(true);
  // const editFirstName = useRef();
  // const editLastName = useRef();

  console.log(firstName);

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName}`}
          </h1>
          {edit ? (
            <button
              className="edit-button"
              onClick={() => {
                setEdit(false);
              }}
            >
              Edit Name
            </button>
          ) : (
            <div>
              <EditButton placeholder={`${firstName}`} />
              <EditButton placeholder={`${lastName}`} />
              {/* <input type="text" placeholder={lastName} ref={editLastName} /> */}
            </div>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Savings (x6712)"}
          amount={"$10,928.42"}
          description={"Available Balance"}
        />
        <Account
          title={"Argent Bank Credit Card (x8349)"}
          amount={"$184.30"}
          description={"Current Balance"}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
