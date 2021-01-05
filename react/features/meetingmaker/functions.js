import { toState } from '../base/redux';

/**
 * Check meeting is audio only.
 *
 * @param {(Function|Object)} stateful - The redux state
 * features/base/participants, the (whole) redux state, or redux's
 * {@code getState} function to be used to retrieve the state
 * features/base/participants.
 * @returns {bool}
 */
export function isAudioOnly(stateful) {
    return toState(stateful)['features/meetingmaker/roomdata']?.audioOnly === true;
}

/**
 * Check meeting is video only.
 *
 * @param {(Function|Object)} stateful - The redux state
 * features/base/participants, the (whole) redux state, or redux's
 * {@code getState} function to be used to retrieve the state
 * features/base/participants.
 * @returns {bool}
 */
export function isVideoOnly(stateful) {
    return toState(stateful)['features/meetingmaker/roomdata']?.videoOnly === true;
}
