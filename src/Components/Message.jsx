const Message = ({ message, time, own }) => {
  return (
    <li className="clearfix">
      <div className="message-data ">
        <span className="message-data-time text-center">{time}</span>
      </div>
      <div
        className={
          own ? "message other-message float-right" : "message my-message"
        }
      >
        {message}
      </div>
    </li>
  );
};

export default Message;
