import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {projectsAPI} from "../../api/projectsAPI";
import {getPageCount} from "../../utils";

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async (page, { rejectWithValue, requestId }) => {

        try {
            const result = await projectsAPI.getProjects(page);
            return result.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const projectReducer = createSlice({
    name: 'projects',
    initialState: {
        isFetching: false,
        error: null,
        projectsData: [],
        totalCount: 0,
        pageSze: 6,
        totalPages: 0,
        currentPage: 1,
        currentRequestId: '',
        isRerender: true
    },
    reducers: {
        changeCurrentPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage += 1;
            }
        },
        changeRerender: (state, action) => {
            state.isRerender = action.payload
        },
        deleteData: (state) => {
            console.log("delete")
            state.projectsData = []
        }
    },
    extraReducers: {
        [fetchProjects.pending]: (state, { meta }) => {
            state.isFetching = true;
            state.currentRequestId = meta.requestId;
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.isFetching = false;
            const { count, results } = action.payload;
            // if (JSON.stringify(results) === JSON.stringify(state.projectsData)) {
            //     state.projectsData = results;
            // } else {
            state.projectsData = [...state.projectsData, ...results];
            // }
            state.totalCount = count;
            state.totalPages = getPageCount(state.totalCount, state.pageSze);
            state.currentRequestId = '';
        },
        [fetchProjects.rejected]: (state, { meta, error, payload }) => {
            state.error = error;
            state.isFetching = false;
            state.currentRequestId = '';
        },
    }
});

export const { changeCurrentPage, changeRerender, deleteData } = projectReducer.actions;
export default projectReducer.reducer;