/** @module logDrains */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Retrieves a list of all log drains that are defined for the authorized account. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} A list of log drains
 */
export function getLogDrains(options?: GetLogDrainsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getLogDrainsOperation, parameters)
}

/**
 * Creates a log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The log drain was successfully created
 */
export function createLogDrain(options?: CreateLogDrainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createLogDrainOperation, parameters)
}

/**
 * Deletes the log drain with the provided `id`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.
 * 
 * @param {string} id ID of the log drain to be deleted
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The log drain was successfully deleted
 */
export function deleteLogDrain(id: string, options?: DeleteLogDrainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(deleteLogDrainOperation, parameters)
}

export interface GetLogDrainsOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CreateLogDrainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DeleteLogDrainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const getLogDrainsOperation: api.OperationInfo = {
  path: '/v1/integrations/log-drains',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createLogDrainOperation: api.OperationInfo = {
  path: '/v1/integrations/log-drains',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteLogDrainOperation: api.OperationInfo = {
  path: '/v1/integrations/log-drains/{id}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
