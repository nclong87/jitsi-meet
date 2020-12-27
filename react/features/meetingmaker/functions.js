import { toState } from '../base/redux';

/**
 * Returns a count of the known participants in the passed in redux state,
 * excluding any fake participants.
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
