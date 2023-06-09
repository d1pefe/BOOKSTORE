import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {FavoriteCardTypes} from "../../utils/@globalTypes";

type InitialType = {
    cart: FavoriteCardTypes[],
}

const initialState: InitialType = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<FavoriteCardTypes>) => {
            const carts = state.cart.find((item: FavoriteCardTypes) => item.data.isbn13 === action.payload.data.isbn13);
            if (carts && carts.count) {
                carts.count++;
            } else {
                state.cart.push({ ...action.payload, count: 1 });
            }
        },
        incrementQuantity: (state, action: PayloadAction<FavoriteCardTypes>) => {
            const carts = state.cart.find((item: FavoriteCardTypes) => item.data.isbn13 === action.payload.data.isbn13);
            if(carts && carts.count) {
                carts.count++;
            }
        },
        decrementQuantity: (state, action: PayloadAction<FavoriteCardTypes>) => {
            const carts = state.cart.find((item: FavoriteCardTypes) => item.data.isbn13 === action.payload.data.isbn13);
            if(carts && carts.count) {
                carts.count--;
            }

            if(carts?.count === 0) {
                const cartIndex = state.cart.findIndex((item: FavoriteCardTypes) => item.data.isbn13 === action.payload.data.isbn13);
                state.cart.splice(cartIndex, 1);
            }
        },
        removeItem: (state, action: PayloadAction<FavoriteCardTypes>) => {
            const cartIndex = state.cart.findIndex((item: FavoriteCardTypes) => item.data.isbn13 === action.payload.data.isbn13);
            state.cart.splice(cartIndex, 1);
        },
        removeAllCart: (state) => {
            state.cart = initialState.cart
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    removeAllCart,
} = cartSlice.actions;

export const CartSelectors = {
    getCart: (state: RootState) => state.cart.cart,
};
