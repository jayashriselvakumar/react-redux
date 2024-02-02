import { BUY_CAKE } from "./CakeType"

const initialState = {
    numberofcakes: 10
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, numberofcakes: state.numberofcakes - 1
            }
        default:
            return state

    }

}

export default CakeReducer