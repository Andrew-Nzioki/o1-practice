import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (bob empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid name and age (bob empty)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernameChangeHandler = (username) => {
    setEnteredUsername(username);
  };

  const ageChangeHanlder = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>{
    setError(null)
  }
  return (
    <>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={(e) => usernameChangeHandler(e.target.value)}
          />
          <label htmlFor="username">Age(Years)</label>
          <input
            id="age"
            value={enteredAge}
            type="text"
            onChange={ageChangeHanlder}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
