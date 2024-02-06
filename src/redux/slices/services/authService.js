import apiSlice from "./apiSlice"

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //***** GET *****/
        getUsers: builder.query({
            providesTags: ['user'],
            query: (body) => ({
                url: 'api/users',
                method: 'GET',
                body,
            }),
        }),


        //***** LOGIN *****/
        login: builder.mutation({
            invalidatesTags: ['user'],
            query: (body) => ({
                url: 'api/login',
                method: 'POST',
                body,
            }),
        }),

        //***** LOG OUT *****/
      

        logout: builder.mutation({
            invalidatesTags: ['user'],
            query: () => ({
                url: 'api/user/logout',
                method: 'GET',
            }),
        }),

        //***** LOG OUT FROM ALL DEVICES *****/
        logoutFromAll: builder.mutation({
            invalidatesTags: ['user'],
            query: (body) => ({
                url: '/user/logout',
                method: 'POST',
                body,
            }),
        }),

        //***** ADD *****/
        addUser: builder.mutation({
            invalidatesTags: ['user'],
            query: (body) => ({
                url: 'api/register',
                method: 'POST',
                body,
            }),
        }),

   

        // **** GET BY ID
        getUserById: builder.query({
            providesTags: ['user'],
            query: (id) => ({
                url: `api/user/${id}`,
                method: 'GET',
            }),
        }),

   
        //***** ADD New User*****/
        addNewUser: builder.mutation({
            invalidatesTags: ['newUser'],
            query: (body) => ({
                url: 'api/user/register',
                method: 'POST',
                body,
            }),
        }),
        updateUsers: builder.mutation({
            invalidatesTags: ['user'],
            query: ({ body, id }) => ({
                url: `api/user/${id}`,

                method: 'PUT',
                body,
            }),
        }),

        // **** GET BY ID
     

        deleteUsers: builder.mutation({
            invalidatesTags: ['user'],
            query: (id) => ({
                url: `api/user/${id}`,

                method: 'DELETE',
            }),
        }),

      

        //***** Update New User *****/
     
    }),
})
export const {
    useGetUsersQuery,
    useAddUserMutation,
    useGetUserByIdQuery,
    useLoginMutation,
    useLogoutMutation,
    useLogoutFromAllMutation,
    useRefreshTokenMutation,
    useGetNewUsersQuery,
    useAddNewUserMutation,
    useUpdateUsersMutation,
    useDeleteUsersMutation
} = userApi