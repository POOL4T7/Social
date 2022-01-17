import FormConatiner from "../Components/FormConatiner";
import { Link, useSearchParams } from "react-router-dom";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";

  return (
    <>
      <FormConatiner>
        <h1 className="text-center">Login form</h1>
        <form>
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
