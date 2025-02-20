import { apiSlice } from "./apiSlice";
const VENDOR_URL = '/api'

export const venderApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        VendorDetails : builder.query({
            query:() =>({
                url:`${VENDOR_URL}/vendor`,
               
            })
        })
    })
    
})

export const {
    useVendorDetailsQuery
} = venderApiSlice