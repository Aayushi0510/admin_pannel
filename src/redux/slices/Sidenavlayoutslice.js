import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCollapsed: false,
}

const Sidenavlayoutslice = createSlice({
    name: 'sideNavLayout',
    initialState,
    reducers: {
        setIsCollapsed: (state, action) => {
            state.isCollapsed = action.payload
        },
    },
})

export const { setIsCollapsed } = Sidenavlayoutslice.actions
export default Sidenavlayoutslice.reducer