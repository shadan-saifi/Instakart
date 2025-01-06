import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Return {
  orderId: number;
  reason: string;
  status: string;
}

interface ReturnsState {
  returns: Return[];
}

const initialState: ReturnsState = {
  returns: [],
};

const returnsSlice = createSlice({
  name: "returns",
  initialState,
  reducers: {
    initiateReturn: (state, action: PayloadAction<Return>) => {
      state.returns.push(action.payload);
    },
    updateReturnStatus: (state, action: PayloadAction<{ orderId: number; status: string }>) => {
      const returnOrder = state.returns.find(r => r.orderId === action.payload.orderId);
      if (returnOrder) {
        returnOrder.status = action.payload.status;
      }
    },
  },
});

export const { initiateReturn, updateReturnStatus } = returnsSlice.actions;
export default returnsSlice.reducer;
