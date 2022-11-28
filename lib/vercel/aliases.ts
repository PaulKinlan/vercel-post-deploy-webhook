/** @module aliases */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.
 * 
 * @param {object} options Optional options
 * @param {object} [options.domain] Get only aliases of the given domain name
 * @param {number} [options.from] Get only aliases created after the provided timestamp
 * @param {number} [options.limit] Maximum number of aliases to list from a request
 * @param {string} [options.projectId] Filter aliases from the given `projectId`
 * @param {number} [options.since] Get aliases created after this JavaScript timestamp
 * @param {number} [options.until] Get aliases created before this JavaScript timestamp
 * @param {string} [options.rollbackDeploymentId] Get aliases that would be rolled back for the given deployment
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The paginated list of aliases
 */
export function listAliases(options?: ListAliasesOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      domain: options.domain,
      from: options.from,
      limit: options.limit,
      projectId: options.projectId,
      since: options.since,
      until: options.until,
      rollbackDeploymentId: options.rollbackDeploymentId,
      teamId: options.teamId
    }
  }
  return gateway.request(listAliasesOperation, parameters)
}

/**
 * Retrieves an Alias for the given host name or alias ID.
 * 
 * @param {string} idOrAlias The alias or alias ID to be retrieved
 * @param {object} options Optional options
 * @param {number} [options.from] Get the alias only if it was created after the provided timestamp
 * @param {string} [options.projectId] Get the alias only if it is assigned to the provided project ID
 * @param {number} [options.since] Get the alias only if it was created after this JavaScript timestamp
 * @param {number} [options.until] Get the alias only if it was created before this JavaScript timestamp
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The alias information
 */
export function getAlias(idOrAlias: string, options?: GetAliasOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      from: options.from,
      projectId: options.projectId,
      since: options.since,
      until: options.until,
      teamId: options.teamId
    },
    path: {
      idOrAlias
    }
  }
  return gateway.request(getAliasOperation, parameters)
}

/**
 * Retrieves all Aliases for the Deployment with the given ID. The authenticated User must own the deployment.
 * 
 * @param {string} id The ID of the deployment the aliases should be listed for
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The list of aliases assigned to the deployment
 */
export function listDeploymentAliases(id: string, options?: ListDeploymentAliasesOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(listDeploymentAliasesOperation, parameters)
}

/**
 * Creates a new alias for the deployment with the given deployment ID. The authenticated user must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.
 * 
 * @param {object} id The ID of the deployment the aliases should be listed for
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The alias was successfully assigned to the deployment
 */
export function assignAlias(id: any, options?: AssignAliasOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(assignAliasOperation, parameters)
}

/**
 * Delete an Alias with the specified ID.
 * 
 * @param {object} aliasId The ID or alias that will be removed
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The alias was successfully removed
 */
export function deleteAlias(aliasId: any, options?: DeleteAliasOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      aliasId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(deleteAliasOperation, parameters)
}

export interface ListAliasesOptions {
  /**
   * Get only aliases of the given domain name
   */
  domain?: any
  /**
   * Get only aliases created after the provided timestamp
   */
  from?: number
  /**
   * Maximum number of aliases to list from a request
   */
  limit?: number
  /**
   * Filter aliases from the given `projectId`
   */
  projectId?: string
  /**
   * Get aliases created after this JavaScript timestamp
   */
  since?: number
  /**
   * Get aliases created before this JavaScript timestamp
   */
  until?: number
  /**
   * Get aliases that would be rolled back for the given deployment
   */
  rollbackDeploymentId?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetAliasOptions {
  /**
   * Get the alias only if it was created after the provided timestamp
   */
  from?: number
  /**
   * Get the alias only if it is assigned to the provided project ID
   */
  projectId?: string
  /**
   * Get the alias only if it was created after this JavaScript timestamp
   */
  since?: number
  /**
   * Get the alias only if it was created before this JavaScript timestamp
   */
  until?: number
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface ListDeploymentAliasesOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface AssignAliasOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DeleteAliasOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const listAliasesOperation: api.OperationInfo = {
  path: '/v4/aliases',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getAliasOperation: api.OperationInfo = {
  path: '/v4/aliases/{idOrAlias}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const listDeploymentAliasesOperation: api.OperationInfo = {
  path: '/v2/deployments/{id}/aliases',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const assignAliasOperation: api.OperationInfo = {
  path: '/v2/deployments/{id}/aliases',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteAliasOperation: api.OperationInfo = {
  path: '/v2/aliases/{aliasId}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
