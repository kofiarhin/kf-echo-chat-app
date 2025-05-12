import { useSelector } from "react-redux";

import "./messageUnit.styles.scss";

const MessageUnit = ({ data }) => {
  const { user } = useSelector((state) => state.auth);

  const check = data.senderId._id === user._id;

  return (
    <div
      className={`message-unit ${
        user._id === data.senderId._id ? "sent" : "received"
      }`}
    >
      {data.message}
    </div>
  );
};

export default MessageUnit;
