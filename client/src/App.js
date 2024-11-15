import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Input } from "reactstrap";

const client = axios.create({
  baseURL: "http://localhost:3001/property-kare",
  json: true,
});

const Contact = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const register = () => {
    if (!form.email || !form.password) {
      setResponse("Please enter an email and password");
    } else {
      client
        .post("/login", { email: form.email, password: form.password })
        .then(() => setResponse("User registered successfully"))
        .catch((error) => setResponse(`Error registering user: ${error.response?.data?.message || error.message}`));
    }
  };

  const signIn = () => {
    if (!form.email || !form.password) {
      setResponse("Please enter an email and password");
    } else {
      client
        .post("/login", { email: form.email, password: form.password })
        .then(() => setResponse("User signed in successfully"))
        .catch((error) => setResponse(`Email or password incorrect: ${error.response?.data?.message || error.message}`));
    }
  };

  const sendServerRequest = () => {
    client({
      method: "get",
      url: "/",
    })
      .then((res) => setResponse(res.data.message))
      .catch((error) => setResponse(`Error getting data! ${error.message}`));
  };

  return (
    <section>
      <Container>
        <Row className="mt-5">
          <Col>
            <h3>Register or Sign In</h3>
            <form>
              <label htmlFor="email">Email:</label>
              <Input
                type="text"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="password">Password:</label>
              <Input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </form>
            <button onClick={register}>Register</button>
            <button onClick={signIn}>Sign In</button>
            <button onClick={sendServerRequest}>Request data from server</button>
            <p><strong>Response:</strong> {response}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
