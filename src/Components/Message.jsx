import { timeSince } from "../Utils/timeConvertor";
const Message = ({ message, time, own }) => {
  return (
    <>
      {own ? (
        <div className="right mt-3 mb-2 d-flex justify-content-end">
          <div
            className="d-flex position-relative px-3 py-2 bg-light"
            style={{
              width: "350px",
              borderRadius: "25px",
            }}
          >
            <div className="send">{message}</div>
            <span className="send-time">
              {timeSince(new Date(time)) || "Just now"}
            </span>
          </div>
        </div>
      ) : (
        <div className="left d-flex justify-content-start p-3">
          <div
            className="d-flex position-relative px-3 py-2"
            style={{
              backgroundColor: "lightgrey",
              width: "350px",
              borderRadius: "25px",
            }}
          >
            <div className="recieved">{message}</div>
            <span className="recieved-time">
              {timeSince(new Date(time)) || "Just now"}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
