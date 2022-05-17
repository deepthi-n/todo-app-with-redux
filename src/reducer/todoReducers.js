import { act } from 'react-dom/test-utils';

const initialData = {
    list: [],
};

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            const { id, data } = action.payload;
            return {
                ...state,
                list: [...state.list, { id: id, data: data }],
            };
        case 'DELETE-TODO':
            const newList = state.list.filter((elem) => elem.id !== action.id);
            return {
                ...state,
                list: newList,
            };
        case 'REMOVE-TODO':
            return { ...state, list: [] };
        default:
            return state;
    }
};

export default todoReducers;
