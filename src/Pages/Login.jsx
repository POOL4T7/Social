import FormConatiner from "../Components/FormConatiner";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("auth/login", {
      email,
      password,
    });
    console.log(res.data);
  };
  return (
    <>
      <FormConatiner>
        <h1 className="text-center">Login form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
        <div className="row pt-3">
          <div className="col">
            New Customer?
            <Link
              className="link-secondary"
              to={redirect ? `/register?redirect?=${redirect}` : "/register"}
            >
              {" "}
              Register
            </Link>
          </div>
        </div>
      </FormConatiner>
    </>
  );
};

export default Login;
