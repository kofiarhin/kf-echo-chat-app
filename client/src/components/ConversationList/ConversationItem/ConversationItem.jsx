import "./conversationitem.styles.scss";
import useSocket from "../../../hooks/useSocket";
import { useDispatch } from "react-redux";
import {
  setCurrentConversation,
  setCurrentConversationId,
} from "../../../redux/conversations/conversationsSlice";

// conversation item
const ConversationItem = ({ data }) => {
  const { socket } = useSocket();
  const dispatch = useDispatch();
  const { _id: conversationId, contact, lastMessage, ...rest } = data;
  const handleSetConvoId = () => {
    // dispatch set current conversation details
    dispatch(setCurrentConversationId(conversationId));
    dispatch(setCurrentConversation({ conversationId, contact }));
  };
  return (
    <div className="conversation-item" onClick={handleSetConvoId}>
      <h2> {contact.name} </h2>
      <p> {lastMessage.message} </p>
    </div>
  );
};

export default ConversationItem;
