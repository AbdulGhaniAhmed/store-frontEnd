import { productConstants } from "../actions/constants"

const initialState = {
    products:[],
    productsByPrice:{
        under5k :[],
        under10k:[],
        under15k:[],
        under20k:[],
        under30k:[]
    }
}

export default (state= initialState,action) => {
    switch(action.type){
        case productConstants.GET_PRODUCT_SUCCESS:
            state={
                ...state,
                products:action.payload.products,
                productsByPrice:{
                    ...action.payload.productsByPrice
                }
            }
            break;
    }
    return state;
}

