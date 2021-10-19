import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import { useAuth } from "../contexts/AuthContext";
import Form from "../Form";
import Textinput from "../Textinput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to Login!");
    }
  }

  return (
    <div>
      <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
        <Textinput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Textinput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </div>
  );
}
