import { SET_ROOM_DATA } from './actionTypes';

/**
 * Set conference room data.
 *
 * @param {Object} data - Room data.
 * @returns {{
 *     type: SET_ROOM_DATA,
 *     data
 * }}
 */
export function setRoomData(data) {
    return {
        type: SET_ROOM_DATA,
        data
    };
}
