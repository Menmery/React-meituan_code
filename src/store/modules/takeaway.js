import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    // 食品列表
    foodsList: []
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    }
  }
})

const { setFoodsList } = foodStore.actions

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(res.data))
  }
}

export { fetchFoodsList }

const reducer = foodStore.reducer

export default reducer