import { useQuery } from "@tanstack/react-query";

const useConversations = (userId) => {
  const getConversations = async () => {
    const res = await fetch(`/api/conversations/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch conversations");
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["conversations", userId],
    queryFn: getConversations,
    enabled: !!userId, // only run query if userId is truthy
  });

  return { data, isLoading, error };
};

export default useConversations;