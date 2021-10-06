import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {projectsAPI} from "../../api/projectsAPI";
import {getPageCount} from "../../utils";
import axios from "axios";

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async ({page, limit}, { rejectWithValue, signal, dispatch}) => {

        dispatch(setPageSize(limit));
        const source = axios.CancelToken.source();
        signal.addEventListener('abort', () => {
            source.cancel();
        })
        try {
            const result = await projectsAPI.getProjects(page, limit, source.token);
            return result.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
    {
        condition({ page }, { getState }) {
            const { projects } = getState();
            if (projects.pageRequests.some((element) => element === page)) {
                return false;
            }
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
        pageSze: 0,
        totalPages: 0,
        currentPage: 1,
        currentRequestId: '',
        pageRequests: [],
    },
    reducers: {
        setPageSize: (state, action) => {
            state.pageSze = action.payload;
        },
        changeCurrentPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage += 1;
            }
        },
        clearData: (state) => {
            state.projectsData = [];
            state.pageRequests = [];
            state.currentPage = 1;
            state.totalCount = 0;
            state.pageSize =  0;
            state.totalPages = 0;
        }
    },
    extraReducers: {
        [fetchProjects.pending]: (state, { meta }) => {
            state.isFetching = true;
            state.currentRequestId = meta.requestId;
            state.error = '';
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.isFetching = false;
            const { count, results } = action.payload;
            state.projectsData = [...state.projectsData, ...results];
            state.pageRequests.push(state.currentPage)
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

export const { setPageSize, changeCurrentPage, clearData } = projectReducer.actions;
export default projectReducer.reducer;