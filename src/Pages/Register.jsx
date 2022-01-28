import React, { useEffect, useState } from "react";
import FormConatiner from "../Components/FormConatiner";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { register } from "../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(register(email, password, name, gender));
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    if (userInfo?.userId) {
      navigate("/");
    }
  }, [navigate, userInfo?.userId]);

  return (
    <>
      <FormConatiner>
        <h1 className="text-center">Register form</h1>
        <form>
          <div className="row g-2 mb-3">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Full Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="gender"
                  aria-label="Floating label select example"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <label htmlFor="gender">Gender</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
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
