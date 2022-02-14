
const Sidebar = ({ friends, onlineUsers, setCurrentUser }) => {
  return (
    <div className="col-3" id="online-users">
      <div className="form-floating mb-2">
        <input
          style={{ borderRadius: "30px" }}
          type="text"
          class="form-control"
          id="searchbar"
          placeholder="name@example.com"
        />
        <label for="searchbar">Search user</label>
      </div>
      <div className="friends-list">
        {friends.map((u) => (
          <div
            key={u._id}
            className="p-2 users rounded d-flex justify-content-between"
            onClick={() => setCurrentUser(u)}
          >
            <div>
              <img
                className="rounded-circle img-fluid m-1"
                src={
                  u.profileDetails.profile
                    ? u.profileDetails.profile
                    : u.profileDetails.gender === "Male"
                    ? "/assests/images/boy.jpg"
                    : "/assests/images/girl.jpg"
                }
                alt="i"
                width="35px"
                height="35px"
              />
              <span> {u.profileDetails.name}</span>
            </div>
            {onlineUsers.includes(u.userId) && (
              <div style={{ paddingTop: "7px" }}>
                <i
                  className="fa fa-circle"
                  style={{ color: "green", fontSize: "10px" }}
                ></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
