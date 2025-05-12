import ConversationItem from "./ConversationItem/ConversationItem";

const ConversationList = ({ data }) => {
  return (
    <div>
      {" "}
      {data.map((convo) => (
        <ConversationItem data={convo} key={convo._id} />
      ))}{" "}
    </div>
  );
};

export default ConversationList;
