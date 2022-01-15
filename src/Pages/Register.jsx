import React from "react";
import FormConatiner from "../Components/FormConatiner";
import { Link, useSearchParams } from "react-router-dom";
const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";
  return (
    <>
      <FormConatiner>
        <h1 className="text-center">Register form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
        <div className="row pt-3">
          <div className="col">
            Already have an account ?{" "}
            <Link to={redirect ? `/login?redirect?=${redirect}` : "/login"}>
              Login
            </Link>
          </div>
        </div>
      </FormConatiner>
    </>
  );
};

export default Register;
