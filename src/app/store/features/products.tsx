import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../utils/type'
import { products } from '../../utils/mock'





const initialState: Products[] = products

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
  },
})

export const {  } = ProductSlice.actions


export default ProductSlice.reducer