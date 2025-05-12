import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentConversation: null,
  currentConversationId: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const conversationSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setCurrentConversation: (state, action) => {
      state.currentConversation = action.payload;
    },
    setCurrentConversationId: (state, action) => {
      state.currentConversationId = action.payload;
    },
  },
});

export const { setCurrentConversation, setCurrentConversationId } =
  conversationSlice.actions;

export default conversationSlice.reducer;
