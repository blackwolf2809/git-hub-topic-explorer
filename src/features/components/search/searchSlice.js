import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTopic } from '../../apis/topicsAPI';

// The initial state of the component
const initialState = {
  topic: {},
  status: 'idle',
  relatedTopics: []
};

// Here we are going to perform the async logic. We are going to use
// createAsyncThunk from redux toolkin to handle async calls
// There are some middlewares we can use to handle async calls
// such redux-thunk or redux-saga that we can also use.
export const getTopicAsync = createAsyncThunk(
  'search/fetchTopic',
  async (topicName) => {
    const response = await fetchTopic(topicName);
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field is used to associated actions
  // In this project was not necessary to use actions
  // but in complex projects will be necessary to use reducers.
  reducers: {},
  // Include reducer with async logic
  extraReducers: (builder) => {
    builder
      .addCase(getTopicAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTopicAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.topic = action.payload.data.topic;
        state.relatedTopics = action.payload.data.topic.relatedTopics;
      });
  },
});

export const selectTopic = (state) => state.search.topic;
export const selectRelatedTopics = (state) => state.search.relatedTopics;

export default searchSlice.reducer;
