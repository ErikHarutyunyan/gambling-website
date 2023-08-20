
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import gameReducer from "./features/game/gameSlice";


export const store = configureStore({
  reducer: {
    user:userReducer,
    game:gameReducer,
  
  },
});
