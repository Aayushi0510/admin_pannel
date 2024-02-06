import apiSlice from "./apiSlice"

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //***** GET *****/
        getCategory: builder.query({
            providesTags: ['category'],
            query: (body) => ({
                url: 'api/categories',
                method: 'GET',
                body,
            }),
        }),


        //***** LOGIN *****/
        addCategory: builder.mutation({
            invalidatesTags: ['category'],
            query: (body) => ({
                url: 'api/category',
                method: 'POST',
                body,
            }),
        }),
        updateCategory: builder.mutation({
            invalidatesTags: ['category'],
            query: ({ body, id }) => ({
                url: `api/category/${id}`,

                method: 'PUT',
                body,
            }),
        }),

        // **** GET BY ID
     

        deleteCategory: builder.mutation({
            invalidatesTags: ['category'],
            query: (id) => ({
                url: `api/category/${id}`,

                method: 'DELETE',
            }),
        }),

        getCategoryById: builder.query({
            providesTags: ['category'],
            query: (id) => ({
                url: `api/category/${id}`,
                method: 'GET',
            }),
        }),



   
    }),
})
export const {
    useGetCategoryQuery,
    useAddCategoryMutation,
    useGetCategoryByIdQuery,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation

   
} = courseApi