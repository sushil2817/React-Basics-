import { createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    incrementByAmount:(state,action)=>{
        state.value += Number(action.payload)
    },
    reset: state =>{
      state.value = 0
    }

  }
})

export const { incremented, decremented, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer

