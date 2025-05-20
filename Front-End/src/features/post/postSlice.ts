import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export interface Post {
  id: string;
  name: string;
  description: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  newPost: {
    newName: string;
    newDescription: string;
  };
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  newPost: {
    newName: '',
    newDescription: '',
  },
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await fetch('http://localhost:3000/api/post');
  if (!res.ok) throw new Error('Error al obtener los posts');
  return (await res.json()) as Post[];
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post: Omit<Post, 'id'>) => {
    const res = await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });

    if (!res.ok) throw new Error('Error al crear el post');
    return (await res.json()) as Post;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/post/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Error al eliminar el post');
    return id;
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setNewPostField: (state, action: { payload: { name: string; value: string } }) => {
      const { name, value } = action.payload;
      if (name in state.newPost) {
        state.newPost[name as keyof typeof state.newPost] = value;
      }
    },
    clearNewPostFields: (state) => {
      state.newPost = { newName: '', newDescription: '' };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error al obtener posts';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
})

export const { setNewPostField, clearNewPostFields } = postSlice.actions;

export default postSlice.reducer