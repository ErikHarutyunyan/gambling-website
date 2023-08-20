import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const templateNamePost = createAsyncThunk(
  'templateName/post',

  async (data, { rejectWithValue }) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const res = await axios.post(
        'http://127.0.0.1:8000/api/token/',
        data,
        config
      )
      return res.data
      
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
