import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'http://localhost:3000/';


export const studentsApi = createApi({
    reducerPath: "studentsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    tagTypes: ['Student'],
    endpoints: (builder) => ({
        getStudentsData: builder.query({
            query: () => 'students',
            transformResponse: (res) => res.reverse(),
            providesTags: ['Student'],
        }),
        addStudent: builder.mutation({
            query: (student) => ({
                url: 'students',
                method: 'POST',
                body: student,
            }),
            invalidatesTags: ['Student'],
        }),
        deleteStudent: builder.mutation({
            query: (studentId) => ({
                url: `students/${studentId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Student'],
        })
    })
});


export const { useGetStudentsDataQuery, useAddStudentMutation, useDeleteStudentMutation } = studentsApi;