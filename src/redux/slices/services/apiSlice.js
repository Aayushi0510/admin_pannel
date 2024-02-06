import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL} from "../../../utils/constants/index"
const tagTypes = [
    'dashboard',
    'user',
   
]

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
        
        prepareHeaders: (headers, { getState, endpoint }) => {
            const authToken = (getState())?.auth?.accessToken
        if (authToken) {
                headers.set('Authorization', authToken)
            }
        

            return headers
        },
    }),
    tagTypes: tagTypes,

    endpoints: () => ({}),
})

export default apiSlice