import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  loading: false,
  error: null,
  message: '',
}

const templateNameSlice = createSlice({
  name: 'templateName',
  initialState,
  reducers: {
  },
  extraReducers: {
  },
})

// export const {} = templateNameSlice.actions

export const selectTemplateName = (state) => state.templateName;

export default templateNameSlice.reducer
