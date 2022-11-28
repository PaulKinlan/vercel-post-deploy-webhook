/** @module deployments */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user is an owner of the deployment.
 * 
 * @param {string} idOrUrl The unique identifier or hostname of the deployment.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The deployment including only public information
 *   The deployment including both public and private information
 */
export function getDeployment(idOrUrl: string, options?: GetDeploymentOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrUrl
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getDeploymentOperation, parameters)
}

/**
 * This endpoint allows you to cancel a deployment which is currently building, by supplying its `id` in the URL.
 * 
 * @param {string} id The unique identifier of the deployment.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function cancelDeployment(id: string, options?: CancelDeploymentOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(cancelDeploymentOperation, parameters)
}

/**
 * Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.
 * 
 * @param {string} idOrUrl The unique identifier or hostname of the deployment.
 * @param {object} options Optional options
 * @param {string} [options.direction] Order of the returned events based on the timestamp.
 * @param {number} [options.follow] When enabled, this endpoint will return live events as they happen.
 * @param {number} [options.limit] Maximum number of events to return. Provide `-1` to return all available logs.
 * @param {string} [options.name] Deployment build ID.
 * @param {number} [options.since] Timestamp for when build logs should be pulled from.
 * @param {number} [options.until] Timestamp for when the build logs should be pulled up until.
 * @param {object} [options.statusCode] HTTP status code range to filter events by.
 * @param {number} [options.delimiter] 
 * @param {number} [options.builds] 
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} A stream of jsonlines where each line is a deployment log item.
 *   Array of deployment logs for the provided query.
 */
export function getDeploymentEvents(idOrUrl: string, options?: GetDeploymentEventsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrUrl
    },
    query: {
      direction: options.direction,
      follow: options.follow,
      limit: options.limit,
      name: options.name,
      since: options.since,
      until: options.until,
      statusCode: options.statusCode,
      delimiter: options.delimiter,
      builds: options.builds,
      teamId: options.teamId
    }
  }
  return gateway.request(getDeploymentEventsOperation, parameters)
}

/**
 * Create a new deployment with all the required and intended data. If the deployment is not a git deployment, all files must be provided with the request, either referenced or inlined.
 * 
 * @param {object} options Optional options
 * @param {object} [options.forceNew] Forces a new deployment even if there is a previous similar deployment
 * @param {object} [options.skipAutoDetectionConfirmation] Allows to skip framework detection so the API would not fail to ask for confirmation
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The successfully created deployment
 */
export function createDeployment(options?: CreateDeploymentOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      forceNew: options.forceNew,
      skipAutoDetectionConfirmation: options.skipAutoDetectionConfirmation,
      teamId: options.teamId
    }
  }
  return gateway.request(createDeploymentOperation, parameters)
}

/**
 * Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.
 * 
 * @param {object} options Optional options
 * @param {number} [options.ContentLength] The file size in bytes
 * @param {string} [options.xVercelDigest] The file SHA1 used to check the integrity
 * @param {string} [options.xNowDigest] The file SHA1 used to check the integrity
 * @param {number} [options.xNowSize] The file size as an alternative to `Content-Length`
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} File already uploaded
 *   File successfully uploaded
 */
export function uploadFile(options?: UploadFileOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    header: {
      'Content-Length': options.ContentLength,
      'x-vercel-digest': options.xVercelDigest,
      'x-now-digest': options.xNowDigest,
      'x-now-size': options.xNowSize
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(uploadFileOperation, parameters)
}

/**
 * List deployments under the account corresponding to the API token. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.
 * 
 * @param {object} options Optional options
 * @param {string} [options.app] Name of the deployment.
 * @param {number} [options.from] Gets the deployment created after this Date timestamp. (default: current time)
 * @param {number} [options.limit] Maximum number of deployments to list from a request.
 * @param {string} [options.projectId] Filter deployments from the given `projectId`.
 * @param {string} [options.target] Filter deployments based on the environment.
 * @param {number} [options.to] Gets the deployment created before this Date timestamp. (default: current time)
 * @param {string} [options.users] Filter out deployments based on users who have created the deployment.
 * @param {number} [options.since] Get Deployments created after this JavaScript timestamp.
 * @param {number} [options.until] Get Deployments created before this JavaScript timestamp.
 * @param {string} [options.state] Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)
 * @param {boolean} [options.rollbackCandidate] Filter deployments based on their rollback candidacy
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getDeployments(options?: GetDeploymentsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      app: options.app,
      from: options.from,
      limit: options.limit,
      projectId: options.projectId,
      target: options.target,
      to: options.to,
      users: options.users,
      since: options.since,
      until: options.until,
      state: options.state,
      rollbackCandidate: options.rollbackCandidate,
      teamId: options.teamId
    }
  }
  return gateway.request(getDeploymentsOperation, parameters)
}

/**
 * This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.
 * 
 * @param {string} id The ID of the deployment to be deleted
 * @param {object} options Optional options
 * @param {string} [options.url] A Deployment or Alias URL. In case it is passed, the ID will be ignored
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The deployment was successfully deleted
 */
export function deleteDeployment(id: string, options?: DeleteDeploymentOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      url: options.url,
      teamId: options.teamId
    }
  }
  return gateway.request(deleteDeploymentOperation, parameters)
}

/**
 * Allows to retrieve the file structure of a deployment by supplying the deployment unique identifier.
 * 
 * @param {string} id The unique deployment identifier
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Retrieved the file tree successfully
 */
export function listDeploymentFiles(id: string, options?: ListDeploymentFilesOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(listDeploymentFilesOperation, parameters)
}

/**
 * Retrieves the list of builds given their deployment's unique identifier.
 * 
 * @param {string} deploymentId The deployment unique identifier
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function listDeploymentBuilds(deploymentId: string, options?: ListDeploymentBuildsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      deploymentId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(listDeploymentBuildsOperation, parameters)
}

/**
 * Allows to retrieve the content of a file by supplying the file identifier and the deployment unique identifier. The response body will contain the raw content of the file.
 * 
 * @param {string} id The unique deployment identifier
 * @param {string} fileId The unique file identifier
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} One of the provided values in the request query is invalid.
 */
export function getDeploymentFileContents(id: string, fileId: string, options?: GetDeploymentFileContentsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id,
      fileId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getDeploymentFileContentsOperation, parameters)
}

export interface GetDeploymentOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CancelDeploymentOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetDeploymentEventsOptions {
  /**
   * Order of the returned events based on the timestamp.
   */
  direction?: 'backward'|'forward'
  /**
   * When enabled, this endpoint will return live events as they happen.
   */
  follow?: 0|1
  /**
   * Maximum number of events to return. Provide `-1` to return all available logs.
   */
  limit?: number
  /**
   * Deployment build ID.
   */
  name?: string
  /**
   * Timestamp for when build logs should be pulled from.
   */
  since?: number
  /**
   * Timestamp for when the build logs should be pulled up until.
   */
  until?: number
  /**
   * HTTP status code range to filter events by.
   */
  statusCode?: any
  delimiter?: 0|1
  builds?: 0|1
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CreateDeploymentOptions {
  /**
   * Forces a new deployment even if there is a previous similar deployment
   */
  forceNew?: '0'|'1'
  /**
   * Allows to skip framework detection so the API would not fail to ask for confirmation
   */
  skipAutoDetectionConfirmation?: '0'|'1'
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface UploadFileOptions {
  /**
   * The file size in bytes
   */
  ContentLength?: number
  /**
   * The file SHA1 used to check the integrity
   */
  xVercelDigest?: string
  /**
   * The file SHA1 used to check the integrity
   */
  xNowDigest?: string
  /**
   * The file size as an alternative to `Content-Length`
   */
  xNowSize?: number
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetDeploymentsOptions {
  /**
   * Name of the deployment.
   */
  app?: string
  /**
   * Gets the deployment created after this Date timestamp. (default: current time)
   */
  from?: number
  /**
   * Maximum number of deployments to list from a request.
   */
  limit?: number
  /**
   * Filter deployments from the given `projectId`.
   */
  projectId?: string
  /**
   * Filter deployments based on the environment.
   */
  target?: 'production'|'preview'
  /**
   * Gets the deployment created before this Date timestamp. (default: current time)
   */
  to?: number
  /**
   * Filter out deployments based on users who have created the deployment.
   */
  users?: string
  /**
   * Get Deployments created after this JavaScript timestamp.
   */
  since?: number
  /**
   * Get Deployments created before this JavaScript timestamp.
   */
  until?: number
  /**
   * Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)
   */
  state?: string
  /**
   * Filter deployments based on their rollback candidacy
   */
  rollbackCandidate?: boolean
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DeleteDeploymentOptions {
  /**
   * A Deployment or Alias URL. In case it is passed, the ID will be ignored
   */
  url?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface ListDeploymentFilesOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface ListDeploymentBuildsOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetDeploymentFileContentsOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const getDeploymentOperation: api.OperationInfo = {
  path: '/v13/deployments/{idOrUrl}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const cancelDeploymentOperation: api.OperationInfo = {
  path: '/v12/deployments/{id}/cancel',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getDeploymentEventsOperation: api.OperationInfo = {
  path: '/v2/deployments/{idOrUrl}/events',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createDeploymentOperation: api.OperationInfo = {
  path: '/v13/deployments',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const uploadFileOperation: api.OperationInfo = {
  path: '/v2/files',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getDeploymentsOperation: api.OperationInfo = {
  path: '/v6/deployments',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteDeploymentOperation: api.OperationInfo = {
  path: '/v13/deployments/{id}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const listDeploymentFilesOperation: api.OperationInfo = {
  path: '/v6/deployments/{id}/files',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const listDeploymentBuildsOperation: api.OperationInfo = {
  path: '/v11/deployments/{deploymentId}/builds',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getDeploymentFileContentsOperation: api.OperationInfo = {
  path: '/v6/deployments/{id}/files/{fileId}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
