//  This code configures a Redux store for state management using Redux Toolkit.
// Store is a global state. We don't need the entire state that is why we are reducing it with reducer
// With this reducer, we are only getting something from this API
//
// Store: The central piece of Redux is the store, which holds the application's state.
//
// State: State in Redux is a plain JavaScript object that holds the data for your application.
// It's read-only, and changes to the state are made by dispatching actions.
//
// Reducers: Reducers are functions that specify how the application's state changes in response to actions.
// They take the current state and an action, and they return the new state. Reducers are pure functions, meaning they do not modify the existing state but create a new state object.
//
// Middleware: Middleware in Redux provides a way to intercept and handle actions before they reach the reducers.
// This can be used for tasks like handling asynchronous operations, logging, or routing.
//
// Import necessary libraries and the 'articleApi' instance.
import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// Create a Redux store with a specific reducer and middleware.
export const store = configureStore({
    //only grab what we need
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});