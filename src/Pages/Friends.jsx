import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Users } from "../data";

const Friends = () => {
  let id = 0;
  const [notFriend, setNotFriend] = useState([]);
  useEffect(() => {
    let users = Users.filter((user) => {
      return user.id !== id;
    });
    setNotFriend(users);
  }, [id]);

  return (
    <div id="friends" className="container text-center mt-5">
      <h2 className="p-5">Add more Friends</h2>
      <div className="row">
        {notFriend.map((user) => (
          <div key={user.id} className="col-xs-4  col-lg-2 ">
            <Card user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
