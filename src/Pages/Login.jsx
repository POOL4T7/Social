import FormConatiner from "../Components/FormConatiner";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Components/Spinner";

const Login = () => {
  let dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password));
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
      {loading && <Spinner />}
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
            <Link className="link-secondary" to="/register">
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
