import React from "react";
import useForm from "../UseForm/UseForm";
import axios from "axios";
import { Form, FormGroup, Label, Input } from "reactstrap";


const Registration = () => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    registerUser(values);
  });

  function registerUser(values) {
    async function addUserToDatabase(values) {
      values.Role = "customer";
      try {
        const response = await axios.post(
          "http://localhost:8000/users/",
          values
        );
        console.log(values);
        window.location.href = "/login";
      } catch (error) {
        console.log(error.response.data);
      }
    }
    addUserToDatabase(values);
  }

  return (
    <div>
      <div className="container text-light">
        <h1>Registration</h1>
        <Form>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              defaultValue=""
              onChange={handleChange}
              value={values.fullName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="Create A Username"
              defaultValue=""
              onChange={handleChange}
              value={values.userName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Create A Password"
              defaultValue=""
              onChange={handleChange}
              value={values.password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              defaultValue=""
              onChange={handleChange}
              value={values.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone_number">Phone-Number</Label>
            <Input
              type="text"
              name="phone_number"
              id="phone_number "
              placeholder="555-555-5555"
              defaultValue=""
              onChange={handleChange}
              value={values.phone_number}
            />
            <button onClick={handleSubmit} className="btn btn-secondary">
              Submit
            </button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
