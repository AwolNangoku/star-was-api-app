import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchesData = {title: string}

export interface SearchHistoryState {
    searches: SearchesData[]
  }

const initialState: SearchHistoryState = {
    searches: [], 
}

export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<SearchesData>) => {
      const { payload } = action;
      const newSearch = state.searches.find(({title}) => title === payload.title);

      state.searches = !newSearch
        ? [...state.searches, payload]
        : state.searches;
    },
    removeSearch: (state, action: PayloadAction<SearchesData>) => {
      const { payload } = action;

      const searchToRemove = state.searches.find(({title}) => title === payload.title);

      state.searches = searchToRemove
        ? state.searches.filter(({title}) => title === payload.title)
        : state.searches;

    },
    removeCartItems: (state, action) => {
      const { payload } = action;

      state.searches = payload.emptySearches;
    },
    extraReducers: (builder) => {},
  },
});

export const {
    addSearch,
    removeSearch,
} = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
