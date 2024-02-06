import apiSlice from "./apiSlice"

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //***** GET *****/
        getOrder: builder.query({
            providesTags: ['order'],
            query: (body) => ({
                url: 'api/orders',
                method: 'GET',
                body,
            }),
        }),


        //***** LOGIN *****/
        addOrder: builder.mutation({
            invalidatesTags: ['order'],
            query: (body) => ({
                url: 'api/Order',
                method: 'POST',
                body,
            }),
        }),
        deleteOrder: builder.mutation({
            invalidatesTags: ['order'],
            query: (id) => ({
                url: `api/order/${id}`,
                method: 'DELETE',
           
            }),
        }),

        //***** LOG OUT *****/
      

        // logout: builder.mutation({
        //     invalidatesTags: ['user'],
        //     query: () => ({
        //         url: 'api/user/logout',
        //         method: 'GET',
        //     }),
        // }),

        // //***** LOG OUT FROM ALL DEVICES *****/
        // logoutFromAll: builder.mutation({
        //     invalidatesTags: ['user'],
        //     query: (body) => ({
        //         url: '/user/logout',
        //         method: 'POST',
        //         body,
        //     }),
        // }),

        // //***** ADD *****/
        // addUser: builder.mutation({
        //     invalidatesTags: ['user'],
        //     query: (body) => ({
        //         url: '/register',
        //         method: 'POST',
        //         body,
        //     }),
        // }),

   

        // // **** GET BY ID
        // getUserById: builder.query({
        //     providesTags: ['user'],
        //     query: (id) => ({
        //         url: `/${id}`,
        //         method: 'GET',
        //     }),
        // }),

   
        //***** ADD New User*****/
        // addNewUser: builder.mutation({
        //     invalidatesTags: ['newUser'],
        //     query: (body) => ({
        //         url: 'api/user/register',
        //         method: 'POST',
        //         body,
        //     }),
        // }),

        updateOrder: builder.mutation({
            invalidatesTags: ['order'],
            query: ({ body, id }) => ({
                url: `api/Order/${id}`,

                method: 'PUT',
                body,
            }),
        }),

        // **** GET BY ID
     

        deleteOrder: builder.mutation({
            invalidatesTags: ['order'],
            query: (id) => ({
                url: `api/Order/${id}`,

                method: 'DELETE',
            }),
        }),

            // **** GET BY ID
            getOrderById: builder.query({
                providesTags: ['order'],
                query: (id) => ({
                    url: `api/user/${id}`,
                    method: 'GET',
                }),
            }),
        //***** Update New User *****/
     
    }),
})
export const {
    useGetOrderQuery,
    useAddOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
    useGetOrderByIdQuery
   
} = orderApi