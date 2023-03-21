import { configureStore } from "@reduxjs/toolkit";
import handleMoviesSlice from "../features/handleMoviesSlice";

const store = configureStore({
  reducer: {
    movies: handleMoviesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
