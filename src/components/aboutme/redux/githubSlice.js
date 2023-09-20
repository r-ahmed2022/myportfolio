import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const username = 'r-ahmed2022';
const token = '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';

export const gitHubInfo = createAsyncThunk('gitHubInfo', async () => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
});

const initialState = {
  data: null,
  loading: 'idle',
  error: null,
};

const githubSlice = createSlice({
  name: 'githubData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(gitHubInfo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(gitHubInfo.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(gitHubInfo.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default githubSlice.reducer;
