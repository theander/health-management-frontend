import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    //      posts:postsReducer,
    //     comments: commentsReducer,
    //      users:usersReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
