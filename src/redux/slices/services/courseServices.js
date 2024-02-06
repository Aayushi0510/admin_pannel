import apiSlice from "./apiSlice"

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getCourse: builder.query({
            providesTags: ['course'],
            query: (body) => ({
                url: 'api/courses',
                method: 'GET',
                body,
            }),
        }),

        addCourse: builder.mutation({
            invalidatesTags: ['course'],
            query: (body) => ({
                url: 'api/course',
                method: 'POST',
                body,
            }),
        }),

        updateCourse: builder.mutation({
            invalidatesTags: ['course'],
            query: ({ body, id }) => ({
                url: `api/course/${id}`,
                method: 'PUT',
                body,
            }),
        }),

        deleteCourse: builder.mutation({
            invalidatesTags: ['course'],
            query: (id) => ({
                url: `api/course/${id}`,

                method: 'DELETE',
            }),
        }),

            getCourseById: builder.query({
                providesTags: ['user'],
                query: (id) => ({
                    url: `api/course/${id}`,
                    method: 'GET',
                }),
            }),
     
    }),
})
export const {
    useGetCourseQuery,
    useAddCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation,
    useGetCourseByIdQuery
} = courseApi