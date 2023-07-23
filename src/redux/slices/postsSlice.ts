import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = [
  { id: 1, title: 'Post 1', description: 'Description of Post 1' },
  { id: 2, title: 'Post 2', description: 'Description of Post 2' },
  { id: 3, title: 'Post 3', description: 'Description of Post 3' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
      addPosts: (state, action) => {
        state.push(...action.payload);
      },
      addPost: (state, action: PayloadAction<any>) => {
        const { id, title, description } = action.payload;
        state.push({ id, title, description });
      },
      updatePost: (state, action: PayloadAction<any>) => {
        const { id, title, description } = action.payload;
        const postIndex = state.findIndex((post: any) => post.id === id);
        if (postIndex !== -1) {
          state[postIndex].title = title;
          state[postIndex].description = description;
        }
      },
      deletePost: (state, action: PayloadAction<any>) => {
        const postId = action.payload;
        return state.filter((post: any) => post.id !== postId);
      },
    }
})

export const { addPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;