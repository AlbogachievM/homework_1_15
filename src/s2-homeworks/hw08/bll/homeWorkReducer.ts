import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

type initialStateT = typeof initialPeople;

export const homeWorkReducer = (state: initialStateT = initialPeople, action: ActionType): initialStateT => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up' ? state.sort((a, b) => a.name > b.name ? 1 : -1)
                : action.payload === 'down' ? state.sort((a, b) => a.name < b.name ? 1 : -1) : state
        }
        case 'check': {
            return [...state.filter(u => u.age >= action.payload)]
        }
        default:
            return state
    }
}
