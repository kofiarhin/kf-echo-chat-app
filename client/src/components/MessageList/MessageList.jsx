import MessageUnit from "../MessageUnit/MessageUnit";
import "./messageList.styles.scss";

const MessageList = ({ data }) => {
  return (
    <div className="message-list">
      {data &&
        data.length > 0 &&
        data.map((item) => <MessageUnit data={item} key={item._id} />)}
    </div>
  );
};

export default MessageList;
