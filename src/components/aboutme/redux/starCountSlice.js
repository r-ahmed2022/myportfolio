import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const username = 'r-ahmed2022';
const token = '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';

export const starCountInfo = createAsyncThunk('starCountInfo', async () => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  const totalStarCount = data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  return totalStarCount;
});

const initialState = {
  starCount: 0,
  loading: 'idle',
  error: null,
};

const starCountSlice = createSlice({
  name: 'starCountData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(starCountInfo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(starCountInfo.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.starCount = action.payload;
      })
      .addCase(starCountInfo.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default starCountSlice.reducer;
