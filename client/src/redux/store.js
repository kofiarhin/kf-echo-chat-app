import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import contactsReducer from "./contacts/contactsSlice";
import conversationReducer from "./conversations/conversationsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    conversations: conversationReducer,
  },
});

export default store;
