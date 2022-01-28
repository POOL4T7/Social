import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormConatiner from "../Components/FormConatiner";
import {
  getUserProfileDetails,
  updateUserProfile,
} from "../actions/UserAction";
import Spinner from "../Components/Spinner";

const Profile = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    gender: "",
    country: "",
    bio: "",
    age: "",
    followers: "",
    followings: "",
    likes: "",
    email: "",
    buttonText: "Update",
    buttonDisable: false,
  });
  const {
    name,
    username,
    email,
    gender,
    // country,
    bio,
    age,
    followers,
    followings,
    likes,
    buttonText,
    buttonDisable,
  } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  let dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user } = userDetails;
  const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
  const { loading: updateLoading } = userProfileUpdate;
  let navigator = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(
        updateUserProfile({
          id: userInfo._id,
          username,
          name,
          gender,
          bio,
          age,
        })
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigator("/login");
    } else {
      if (!user.email && !user.userId) {
        dispatch(getUserProfileDetails("profile"));
      } else {
        let profile = user.profileDetails;
        setValues({
          ...values,
          name: profile.name,
          username: profile.username,
          age: profile.age,
          gender: profile.gender,
          email: user.email,
          country: profile.country,
          bio: profile.bio,
          followers: user.followers.length,
          followings: user.followings.length,
          likes: user.likes.length,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, navigator, user, userInfo]);
  return (
    <>
      <FormConatiner>
        {(loading || updateLoading) && <Spinner />}
        <h1 className="text-center">Profile Update</h1>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Full Name"
              value={username}
              onChange={handleChange("username")}
            />
            <label htmlFor="username">username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={handleChange("name")}
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="row g-2 mb-3">
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="age"
                  aria-label="Floating label select example"
                  value={age}
                  onChange={handleChange("age")}
                >
                  <option value="B">16+</option>
                  <option value="A">18+</option>
                  <option value="C">42+</option>
                </select>
                <label htmlFor="age">Age</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="gender"
                  aria-label="Floating label select example"
                  value={gender}
                  onChange={handleChange("gender")}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <label htmlFor="gender">Gender</label>
              </div>
            </div>
          </div>
          <div className="row g-2 mb-3">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="followers"
                  placeholder="followers"
                  value={followers}
                  disabled
                />
                <label htmlFor="followers">Followers</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="followings"
                  placeholder="followings"
                  value={followings}
                  disabled
                />
                <label htmlFor="followings">Followings</label>
              </div>
            </div>
          </div>
          <div className="row g-2 mb-3">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="followers"
                  placeholder="followers"
                  value={likes}
                  disabled
                />
                <label htmlFor="followers">Likes</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="followings"
                  placeholder="followings"
                  value="In pro membership"
                  disabled
                />
                <label htmlFor="followings">Dislike</label>
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
              disabled
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Add your bio"
              id="bio"
              style={{ height: "100px" }}
              value={bio}
              onChange={handleChange("bio")}
            ></textarea>
            <label htmlFor="bio">Bio</label>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={submitHandler}
            disabled={buttonDisable}
          >
            {buttonText}
          </button>
        </form>
      </FormConatiner>
    </>
  );
};

export default Profile;
