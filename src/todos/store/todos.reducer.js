import {createAction, handleActions} from 'redux-actions'
import produce from 'immer'

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = ''
const TOGGLE = ''
const REMOVE = ''

export const changeInput = createAction()
export const inset = createAction()
//
//
const initailState = {
    // 채우지 마세요.
}

const todos = handleActions({
    //
}, initailState)

export default todos