/** @module secrets */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Retrieves the active Vercel secrets for the authenticated user. By default it returns 20 secrets. The rest can be retrieved using the pagination options. The body will contain an entry for each secret.
 * 
 * @param {object} options Optional options
 * @param {string} [options.id] Filter out secrets based on comma separated secret ids.
 * @param {string} [options.projectId] Filter out secrets that belong to a project.
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response retrieving a list of secrets.
 */
export function getSecrets(options?: GetSecretsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      id: options.id,
      projectId: options.projectId,
      teamId: options.teamId
    }
  }
  return gateway.request(getSecretsOperation, parameters)
}

/**
 * Retrieves the information for a specific secret by passing either the secret id or name in the URL.
 * 
 * @param {string} idOrName The name or the unique identifier to which the secret belongs to.
 * @param {object} options Optional options
 * @param {string} [options.decrypt] Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response retrieving a secret.
 */
export function getSecret(idOrName: string, options?: GetSecretOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      decrypt: options.decrypt,
      teamId: options.teamId
    }
  }
  return gateway.request(getSecretOperation, parameters)
}

/**
 * Allows to create a new secret.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response showing the created secret.
 */
export function createSecret(options?: CreateSecretOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createSecretOperation, parameters)
}

/**
 * Enables to edit the name of a user's secret. The name has to be unique to that user's secrets.
 * 
 * @param {string} name The name of the secret.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function renameSecret(name: string, options?: RenameSecretOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      name
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(renameSecretOperation, parameters)
}

/**
 * This deletes the user's secret defined in the URL.
 * 
 * @param {string} idOrName The name or the unique identifier to which the secret belongs to.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function deleteSecret(idOrName: string, options?: DeleteSecretOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(deleteSecretOperation, parameters)
}

export interface GetSecretsOptions {
  /**
   * Filter out secrets based on comma separated secret ids.
   */
  id?: string
  /**
   * Filter out secrets that belong to a project.
   */
  projectId?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetSecretOptions {
  /**
   * Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.
   */
  decrypt?: 'true'|'false'
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CreateSecretOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface RenameSecretOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DeleteSecretOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const getSecretsOperation: api.OperationInfo = {
  path: '/v3/secrets',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getSecretOperation: api.OperationInfo = {
  path: '/v3/secrets/{idOrName}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createSecretOperation: api.OperationInfo = {
  path: '/v2/secrets/{name}',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const renameSecretOperation: api.OperationInfo = {
  path: '/v2/secrets/{name}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteSecretOperation: api.OperationInfo = {
  path: '/v2/secrets/{idOrName}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
