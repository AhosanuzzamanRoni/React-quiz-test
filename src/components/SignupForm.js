import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Textinput from "./Textinput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmPassword) {
      return setError("password don;t match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to Create an Acccount!");
    }
  }

  return (
    <div>
      <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
        <Textinput
          type="text"
          placeholder="Enter Your Name"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Textinput
          type="text"
          placeholder="Enter Your Email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Textinput
          type="password"
          placeholder="Enter Your Password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Textinput
          type="password"
          placeholder="Confirm Your Password"
          icon="lock_clock"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Checkbox
          text="I agree to the Terms &amp; Conditions"
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          {" "}
          <span> Submit now</span>
        </Button>
        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </div>
  );
}
