/** @module authentication */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Retrieve a list of the current User's authentication tokens.
 */
export function listAuthTokens(): Promise<api.Response<any>> {
  return gateway.request(listAuthTokensOperation)
}

/**
 * Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response.
 */
export function createAuthToken(options?: CreateAuthTokenOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createAuthTokenOperation, parameters)
}

/**
 * Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.
 * 
 * @param {string} tokenId The identifier of the token to invalidate. The special value \"current\" may be supplied, which invalidates the token that the HTTP request was authenticated with.
 * @return {Promise<object>} Authentication token successfully deleted.
 */
export function deleteAuthToken(tokenId: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      tokenId
    }
  }
  return gateway.request(deleteAuthTokenOperation, parameters)
}

/**
 * Retrieve metadata about an authentication token belonging to the currently authenticated User.
 * 
 * @param {string} tokenId The identifier of the token to retrieve. The special value \"current\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.
 * @return {Promise<object>} Successful response.
 */
export function getAuthToken(tokenId: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      tokenId
    }
  }
  return gateway.request(getAuthTokenOperation, parameters)
}

/**
 * Verify the user accepted the login request and get a authentication token. The user email address and the token received after requesting the login must be added to the URL as a query string with the names `email` and `token`.
 * 
 * @param {string} token The token returned when the login was requested.
 * @param {object} options Optional options
 * @param {string} [options.email] Email to verify the login.
 * @param {string} [options.tokenName] The desired name for the token. It will be displayed on the user account details.
 * @param {string} [options.ssoUserId] The SAML Profile ID, when connecting a SAML Profile to a Team member for the first time.
 * @return {Promise<object>} The verification was successful.
 */
export function verifyToken(token: string, options?: VerifyTokenOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      email: options.email,
      token,
      tokenName: options.tokenName,
      ssoUserId: options.ssoUserId
    }
  }
  return gateway.request(verifyTokenOperation, parameters)
}

/**
 * Request a new login for a user to get a token. This will respond with a verification token and send an email to confirm the request. Once confirmed you can use the verification token to get an authentication token.
 */
export function emailLogin(): Promise<api.Response<any>> {
  return gateway.request(emailLoginOperation)
}

export interface CreateAuthTokenOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface VerifyTokenOptions {
  /**
   * Email to verify the login.
   */
  email?: string
  /**
   * The desired name for the token. It will be displayed on the user account details.
   */
  tokenName?: string
  /**
   * The SAML Profile ID, when connecting a SAML Profile to a Team member for the first time.
   */
  ssoUserId?: string
}

const listAuthTokensOperation: api.OperationInfo = {
  path: '/v5/user/tokens',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createAuthTokenOperation: api.OperationInfo = {
  path: '/v3/user/tokens',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteAuthTokenOperation: api.OperationInfo = {
  path: '/v3/user/tokens/{tokenId}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getAuthTokenOperation: api.OperationInfo = {
  path: '/v5/user/tokens/{tokenId}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const verifyTokenOperation: api.OperationInfo = {
  path: '/registration/verify',
  method: 'get'
}

const emailLoginOperation: api.OperationInfo = {
  path: '/registration',
  method: 'post'
}
