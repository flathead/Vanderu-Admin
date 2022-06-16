import React from 'react'
import { ADD_NEW_TARIFF } from '../actionTypes'
const { AllTariffs } = require('../../data/tariffs')

const initial_state_for_tariff = {
    all_Tariffs: AllTariffs
}

const tariffReducer = (state = initial_state_for_tariff, action) => {

    switch (action.type) {


        case ADD_NEW_TARIFF:
            state.all_Tariffs.push({
                id: state.all_Tariffs.length + 1,
                name: action.payload.data.name,
                desc: action.payload.data.desc,
                sign: action.payload.data.sign,
                color: action.payload.data.color
            })
            return { ...state, all_Tariffs: state.all_Tariffs };

        default:
            return state;
    }

}
export default tariffReducer