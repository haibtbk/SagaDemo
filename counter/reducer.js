import { DECREASE_COUNTER_ASYNC, INCREASE_COUNTER_ASYNC } from './ActionTypes';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const initialState = {count:0}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER_ASYNC:
            return {
                ...state,
                count:state.count + action.value
            }
        case DECREASE_COUNTER_ASYNC:
            return {
                ...state,
                count:state.count - action.value
            }

        default:
            return state;
    }
}

export default counterReducer;