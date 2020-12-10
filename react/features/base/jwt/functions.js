/* @flow */
/* eslint-disable */

import { parseURLParams } from '../util';

/**
 * Retrieves the JSON Web Token (JWT), if any, defined by a specific
 * {@link URL}.
 *
 * @param {URL} url - The {@code URL} to parse and retrieve the JSON Web Token
 * (JWT), if any, from.
 * @returns {string} The JSON Web Token (JWT), if any, defined by the specified
 * {@code url}; otherwise, {@code undefined}.
 */
export function parseJWTFromURLParams(url: URL = window.location) {
    return parseURLParams(url, true, 'search').jwt;
    // return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMzNjM2MwYTQtNmJjMi00NzlkLTg1YjktNWI2YWZiYjBhODE4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDc1NzczMTYsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMiBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4yQG1haWxpbmF0b3IuY29tIiwiaWQiOiI1OTEifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.UTD9K41DSGtpI1pM2Y_BFzOEzMvwbd3RSeQPSUHgsPM';
    // return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMzNjM2MwYTQtNmJjMi00NzlkLTg1YjktNWI2YWZiYjBhODE4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDc1NzczMTYsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMiBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4yQG1haWxpbmF0b3IuY29tIiwiaWQiOiI1OTEifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.UTD9K41DSGtpI1pM2Y_BFzOEzMvwbd3RSeQPSUHgsPM';
}

/**
 * Returns the user name after decoding the jwt.
 *
 * @param {Object} state - The app state.
 * @returns {string}
 */
export function getJwtName(state: Object) {
    const { user } = state['features/base/jwt'];

    return user?.name || '';
}
