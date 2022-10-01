import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { studentsApi } from '@/services/studentsApi';

export const store = configureStore({
    reducer: {
        [studentsApi.reducerPath]: studentsApi.reducer,
    },

    middleware: (gDM) => gDM().concat(studentsApi.middleware),
});

setupListeners(store.dispatch);