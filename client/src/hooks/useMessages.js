import { useQuery } from "@tanstack/react-query";

const getMessages = async (conversationId) => {
  const res = await fetch(`/api/messages/${conversationId}`);
  if (!res.ok) {
    throw new Error("There was a problem getting messages");
  }
  return res.json();
};

const useMessages = (conversationId) => {
  return useQuery({
    queryKey: ["conversations", conversationId],
    queryFn: () => getMessages(conversationId),
    enabled: !!conversationId,
  });
};

export default useMessages;