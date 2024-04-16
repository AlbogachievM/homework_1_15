import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

type initialStateT = typeof initialPeople;

export const homeWorkReducer = (state: initialStateT = initialPeople, action: ActionType): initialStateT => { // need to fix any
    let newState = [...state]
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up' ? newState.sort((a, b) => a.name > b.name ? 1 : -1)
                : action.payload === 'down' ? newState.sort((a, b) => a.name < b.name ? 1 : -1) : newState
        }
        case 'check': {
            return newState.filter(u => u.age >= action.payload)
        }
        default:
            return newState
    }
}
