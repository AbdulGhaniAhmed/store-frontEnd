import axiosInstance from "../helpers/axios"
import { productConstants } from "./constants";

export const getProductsBySlug = (slug) =>{

    return async dispatch => {
        const res = await axiosInstance.get(`/products/${slug}`);
        
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_PRODUCT_SUCCESS,
                payload: res.data
            })
        }
    }
}