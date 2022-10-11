import React from "react";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import EditButton from "../components/EditInput";
import { editUser } from "../features/users.slice";

const Profile = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const accessToken = useSelector((state) => state.user.auth.accessToken);
  const [edit, setEdit] = useState(true);
  const editFirstName = useRef();
  const editLastName = useRef();
  const dispatch = useDispatch();

  const confirmEdit = () => {
    console.log(editFirstName.current.value);
    console.log(editLastName.current.value);
    setEdit(true);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    const data = {
      firstName: editFirstName.current.value,
      lastName: editLastName.current.value,
    };

    axios
      .put("http://localhost:3001/api/v1/user/profile", data, {
        headers: headers,
      })
      .then((res) => {
        dispatch(editUser([data.firstName, data.lastName]));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const cancelEdit = () => {
    setEdit(true);
  };

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
            <div className="edit-area">
              <div className="input-edit-area">
                <EditButton placeholder={`${firstName}`} ref={editFirstName} />
                <EditButton placeholder={`${lastName}`} ref={editLastName} />
              </div>
              <div className="confirm-edit-area">
                <button
                  className="save"
                  onClick={() => {
                    confirmEdit();
                  }}
                ></button>
                <button
                  className="cancel"
                  onClick={() => {
                    cancelEdit();
                  }}
                ></button>
              </div>
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
