/**
 * Get cart selection to downloadtool.
 * @module actions/getUsersEmail
 */
export const USERS_EMAIL = 'USERS_EMAIL';

/**
 * Get cart selection to downloadtool.
 * @function getUsersEmail
 * @returns {Object} Get extra items action.
 */
export function getUsersEmail() {
  return {
    type: USERS_EMAIL,
    // uid: uid,
    request: {
      op: 'get',
      path: '/@users_email',
    },
  };
}
