/** @module teams */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get information for the Team specified by the `teamId` parameter.
 * 
 * @param {object} options Optional options
 * @param {string} [options.slug] 
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The requested team
 */
export function getTeam(options?: GetTeamOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      slug: options.slug
    },
    path: {
      teamId: options.teamId
    }
  }
  return gateway.request(getTeamOperation, parameters)
}

/**
 * Update the information of a Team specified by the `teamId` parameter. The request body should contain the information that will be updated on the Team.
 * 
 * @param {string} teamId The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function patchTeam(teamId: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      teamId
    }
  }
  return gateway.request(patchTeamOperation, parameters)
}

/**
 * Get a paginated list of all the Teams the authenticated User is a member of.
 * 
 * @param {object} options Optional options
 * @param {number} [options.limit] Maximum number of Teams which may be returned.
 * @param {number} [options.since] Timestamp (in milliseconds) to only include Teams created since then.
 * @param {number} [options.until] Timestamp (in milliseconds) to only include Teams created until then.
 * @return {Promise<object>} A paginated list of teams.
 */
export function getTeams(options?: GetTeamsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      limit: options.limit,
      since: options.since,
      until: options.until
    }
  }
  return gateway.request(getTeamsOperation, parameters)
}

/**
 * Delete an active Team invite code.
 * 
 * @param {string} inviteId The Team invite code ID.
 * @return {Promise<object>} Successfully deleted Team invite code.
 */
export function deleteTeamInviteCode(inviteId: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      inviteId
    }
  }
  return gateway.request(deleteTeamInviteCodeOperation, parameters)
}

/**
 * Create a new Team under your account. You need to send a POST request with the desired Team slug, and optionally the Team name.
 */
export function createTeam(): Promise<api.Response<any>> {
  return gateway.request(createTeamOperation)
}

/**
 * Get a paginated list of team members for the provided team.
 * 
 * @param {object} options Optional options
 * @param {number} [options.limit] Limit how many teams should be returned
 * @param {number} [options.since] Timestamp in milliseconds to only include members added since then.
 * @param {number} [options.until] Timestamp in milliseconds to only include members added until then.
 * @param {string} [options.search] Search team members by their name, username, and email.
 * @param {string} [options.role] Only return members with the specified team role.
 * @param {string} [options.excludeProject] Exclude members who belong to the specified project.
 * @return {Promise<object>} Paginated list of members for the team.
 */
export function getTeamMembers(options?: GetTeamMembersOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      limit: options.limit,
      since: options.since,
      until: options.until,
      search: options.search,
      role: options.role,
      excludeProject: options.excludeProject
    }
  }
  return gateway.request(getTeamMembersOperation, parameters)
}

/**
 * Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.
 * 
 * @param {string} teamId The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The Team was successfuly deleted
 */
export function deleteTeam(teamId: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      teamId
    }
  }
  return gateway.request(deleteTeamOperation, parameters)
}

/**
 * Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.
 * 
 * @param {object} options Optional options
 * @param {string} [options.userId] 
 * @return {Promise<object>} Successfully
 */
export function getTeamAccessRequest(options?: GetTeamAccessRequestOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      userId: options.userId
    }
  }
  return gateway.request(getTeamAccessRequestOperation, parameters)
}

/**
 * Join a team with a provided invite code or team ID.
 */
export function joinTeam(): Promise<api.Response<any>> {
  return gateway.request(joinTeamOperation)
}

/**
 * Request access to a team as a member. An owner has to approve the request. Only 10 users can request access to a team at the same time.
 */
export function requestAccessToTeam(): Promise<api.Response<any>> {
  return gateway.request(requestAccessToTeamOperation)
}

/**
 * Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user can be specified with an email or an ID. If both email and ID are provided, ID will take priority.
 */
export function inviteUserToTeam(): Promise<api.Response<any>> {
  return gateway.request(inviteUserToTeamOperation)
}

/**
 * Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.
 * 
 * @param {string} uid The ID of the member.
 * @return {Promise<object>} Successfully updated the membership.
 */
export function updateTeamMember(uid: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      uid
    }
  }
  return gateway.request(updateTeamMemberOperation, parameters)
}

/**
 * Remove a Team Member from the Team, or dismiss a user that requested access, or leave a team.
 * 
 * @param {string} uid The user ID of the member.
 * @return {Promise<object>} Successfully removed a member of the team.
 */
export function removeTeamMember(uid: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      uid
    }
  }
  return gateway.request(removeTeamMemberOperation, parameters)
}

export interface GetTeamOptions {
  slug?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetTeamsOptions {
  /**
   * Maximum number of Teams which may be returned.
   */
  limit?: number
  /**
   * Timestamp (in milliseconds) to only include Teams created since then.
   */
  since?: number
  /**
   * Timestamp (in milliseconds) to only include Teams created until then.
   */
  until?: number
}

export interface GetTeamMembersOptions {
  /**
   * Limit how many teams should be returned
   */
  limit?: number
  /**
   * Timestamp in milliseconds to only include members added since then.
   */
  since?: number
  /**
   * Timestamp in milliseconds to only include members added until then.
   */
  until?: number
  /**
   * Search team members by their name, username, and email.
   */
  search?: string
  /**
   * Only return members with the specified team role.
   */
  role?: 'OWNER'|'MEMBER'|'DEVELOPER'|'VIEWER'
  /**
   * Exclude members who belong to the specified project.
   */
  excludeProject?: string
}

export interface GetTeamAccessRequestOptions {
  userId?: string
}

const getTeamOperation: api.OperationInfo = {
  path: '/v2/teams/{teamId}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const patchTeamOperation: api.OperationInfo = {
  path: '/v2/teams/{teamId}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getTeamsOperation: api.OperationInfo = {
  path: '/v2/teams',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteTeamInviteCodeOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}/invites/{inviteId}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createTeamOperation: api.OperationInfo = {
  path: '/v1/teams',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getTeamMembersOperation: api.OperationInfo = {
  path: '/v2/teams/{teamId}/members',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteTeamOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getTeamAccessRequestOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}/request/{userId}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const joinTeamOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}/members/teams/join',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const requestAccessToTeamOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}/request',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const inviteUserToTeamOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}/members',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const updateTeamMemberOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}/members/{uid}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const removeTeamMemberOperation: api.OperationInfo = {
  path: '/v1/teams/{teamId}/members/{uid}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
