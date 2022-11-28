/** @module integrations */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.
 * 
 * @param {string} view 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The list of configurations for the authenticated user
 */
export function getConfigurations(view: 'account'|'project', options?: GetConfigurationsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      view,
      teamId: options.teamId
    }
  }
  return gateway.request(getConfigurationsOperation, parameters)
}

/**
 * Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.
 * 
 * @param {string} id ID of the configuration to check
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getConfiguration(id: string, options?: GetConfigurationOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getConfigurationOperation, parameters)
}

/**
 * Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.
 * 
 * @param {string} id 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The configuration was successfully removed
 */
export function deleteConfiguration(id: string, options?: DeleteConfigurationOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(deleteConfigurationOperation, parameters)
}

/**
 * Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.
 * 
 * @param {object} options Optional options
 * @param {object} [options.provider] 
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function gitNamespaces(options?: GitNamespacesOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      provider: options.provider,
      teamId: options.teamId
    }
  }
  return gateway.request(gitNamespacesOperation, parameters)
}

/**
 * Lists git repositories linked to a namespace `id` for a supported provider. A specific namespace `id` can be obtained via the `git-namespaces`  endpoint. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider or namespace is not provided, it will try to obtain it from the user that authenticated the request.
 * 
 * @param {object} options Optional options
 * @param {string} [options.query] 
 * @param {string,number} [options.namespaceId] 
 * @param {object} [options.provider] 
 * @param {string} [options.installationId] 
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function gitNamespaces(options?: GitNamespacesOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      query: options.query,
      namespaceId: options.namespaceId,
      provider: options.provider,
      installationId: options.installationId,
      teamId: options.teamId
    }
  }
  return gateway.request(gitNamespacesOperation, parameters)
}

export interface GetConfigurationsOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetConfigurationOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DeleteConfigurationOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GitNamespacesOptions {
  provider?: 'github'|'gitlab'|'bitbucket'
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GitNamespacesOptions {
  query?: string
  namespaceId?: string,number
  provider?: 'github'|'gitlab'|'bitbucket'
  installationId?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const getConfigurationsOperation: api.OperationInfo = {
  path: '/v1/integrations/configurations',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getConfigurationOperation: api.OperationInfo = {
  path: '/v1/integrations/configuration/{id}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteConfigurationOperation: api.OperationInfo = {
  path: '/v1/integrations/configuration/{id}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const gitNamespacesOperation: api.OperationInfo = {
  path: '/v1/integrations/git-namespaces',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const gitNamespacesOperation: api.OperationInfo = {
  path: '/v1/integrations/search-repo',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
