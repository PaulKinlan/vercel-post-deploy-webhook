/** @module checks */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.
 * 
 * @param {string} deploymentId The deployment to create the check for.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function createCheck(deploymentId: string, options?: CreateCheckOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      deploymentId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createCheckOperation, parameters)
}

/**
 * List all of the checks created for a deployment.
 * 
 * @param {string} deploymentId The deployment to get all checks for
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getAllChecks(deploymentId: string, options?: GetAllChecksOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      deploymentId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getAllChecksOperation, parameters)
}

/**
 * Return a detailed response for a single check.
 * 
 * @param {string} deploymentId The deployment to get the check for.
 * @param {string} checkId The check to fetch
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getCheck(deploymentId: string, checkId: string, options?: GetCheckOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      deploymentId,
      checkId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getCheckOperation, parameters)
}

/**
 * Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.
 * 
 * @param {string} deploymentId The deployment to update the check for.
 * @param {string} checkId The check being updated
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function updateCheck(deploymentId: string, checkId: string, options?: UpdateCheckOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      deploymentId,
      checkId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(updateCheckOperation, parameters)
}

/**
 * Rerequest a selected check that has failed.
 * 
 * @param {string} deploymentId The deployment to rerun the check for.
 * @param {string} checkId The check to rerun
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function rerequestCheck(deploymentId: string, checkId: string, options?: RerequestCheckOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      deploymentId,
      checkId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(rerequestCheckOperation, parameters)
}

export interface CreateCheckOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetAllChecksOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetCheckOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface UpdateCheckOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface RerequestCheckOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const createCheckOperation: api.OperationInfo = {
  path: '/v1/deployments/{deploymentId}/checks',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getAllChecksOperation: api.OperationInfo = {
  path: '/v1/deployments/{deploymentId}/checks',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getCheckOperation: api.OperationInfo = {
  path: '/v1/deployments/{deploymentId}/checks/{checkId}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const updateCheckOperation: api.OperationInfo = {
  path: '/v1/deployments/{deploymentId}/checks/{checkId}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const rerequestCheckOperation: api.OperationInfo = {
  path: '/v1/deployments/{deploymentId}/checks/{checkId}/rerequest',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
