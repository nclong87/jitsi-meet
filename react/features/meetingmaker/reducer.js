import { ReducerRegistry } from '../base/redux';

import { SET_ROOM_DATA } from './actionTypes';

ReducerRegistry.register('features/meetingmaker/roomdata', (state = {}, action) => {
    switch (action.type) {
    case SET_ROOM_DATA: {
        return action.data;
    }
    default:
        break;
    }

    return state;
});
