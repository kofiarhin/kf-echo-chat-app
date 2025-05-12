import { useEffect } from "react";
import { useSelector } from "react-redux";
import useConversations from "../../hooks/useConversation";
import ConversationList from "../../components/ConversationList/conversationList";
import useMessages from "../../hooks/useMessages";
import "./chat.styles.scss";
import MessageList from "../../components/MessageList/MessageList";

const Chat = () => {
  const { user } = useSelector((state) => state.auth);
  const { currentConversation } = useSelector((state) => state.conversations);

  const { data: conversationsData, isLoading: conversationLoading } =
    useConversations(user?._id);
  const { data: messagesData } = useMessages(
    currentConversation?.conversationId
  );

  if (conversationLoading) return <h1 className="loading">Loading...</h1>;

  return (
    <div className="chat">
      <div class="chat-wrapper">
        {/* list of conversations */}
        <div className="conversations-wrapper">
          {conversationsData !== undefined && conversationsData?.length > 0 && (
            <ConversationList data={conversationsData} />
          )}
        </div>
        {/* list of messages */}
        <div className="messages-wrapper">
          <h2 className="hea;ding"> {currentConversation?.contact?.name} </h2>

          <MessageList data={messagesData} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
