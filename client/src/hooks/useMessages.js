import { useQuery } from "@tanstack/react-query";

const getMessages = async (conversationId) => {
  try {
    const url = `/api/messages/${conversationId}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("there was a problem getting messages");
    }
    return res.json();
  } catch (error) {
    return { error: error.message };
  }
};

const useMessages = (conversationId) => {
  return useQuery({
    queryFn: () => getMessages(conversationId),
    queryKey: ["conversations", conversationId],
    enabled: !!conversationId,
  });
};

export default useMessages;
