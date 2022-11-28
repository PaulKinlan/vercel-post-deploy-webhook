/** @module artifacts */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Check the status of Remote Caching for this principal. Returns a JSON-encoded status indicating if Remote Caching is enabled, disabled, or disabled due to usage limits.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function status(options?: StatusOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(statusOperation, parameters)
}

/**
 * Records an artifacts cache usage event. The body of this request is an array of cache usage events. The supported event types are `HIT` and `MISS`. The source is either `LOCAL` the cache event was on the users filesystem cache or `REMOTE` if the cache event is for a remote cache. When the event is a `HIT` the request also accepts a number `duration` which is the time taken to generate the artifact in the cache.
 * 
 * @param {object} options Optional options
 * @param {string} [options.xArtifactClientCi] The continuous integration or delivery environment where this artifact is downloaded.
 * @param {number} [options.xArtifactClientInteractive] 1 if the client is an interactive shell. Otherwise 0
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Success. Event recorded.
 */
export function recordEvents(options?: RecordEventsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    header: {
      'x-artifact-client-ci': options.xArtifactClientCi,
      'x-artifact-client-interactive': options.xArtifactClientInteractive
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(recordEventsOperation, parameters)
}

/**
 * Check that a cache artifact with the given `hash` exists. This request returns response headers only and is equivalent to a `GET` request to this endpoint where the response contains no body.
 * 
 * @param {string} hash The artifact hash
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The artifact was found and headers are returned
 */
export function artifactExists(hash: string, options?: ArtifactExistsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hash
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(artifactExistsOperation, parameters)
}

/**
 * Downloads a cache artifact indentified by its `hash` specified on the request path. The artifact is downloaded as an octet-stream. The client should verify the content-length header and response body.
 * 
 * @param {string} hash The artifact hash
 * @param {object} options Optional options
 * @param {string} [options.xArtifactClientCi] The continuous integration or delivery environment where this artifact is downloaded.
 * @param {number} [options.xArtifactClientInteractive] 1 if the client is an interactive shell. Otherwise 0
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The artifact was found and is downloaded as a stream. Content-Length should be verified.
 */
export function downloadArtifact(hash: string, options?: DownloadArtifactOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    header: {
      'x-artifact-client-ci': options.xArtifactClientCi,
      'x-artifact-client-interactive': options.xArtifactClientInteractive
    },
    path: {
      hash
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(downloadArtifactOperation, parameters)
}

/**
 * Uploads a cache artifact identified by the `hash` specified on the path. The cache artifact can then be downloaded with the provided `hash`.
 * 
 * @param {number} ContentLength The artifact size in bytes
 * @param {string} hash The artifact hash
 * @param {object} options Optional options
 * @param {number} [options.xArtifactDuration] The time taken to generate the uploaded artifact in milliseconds.
 * @param {string} [options.xArtifactClientCi] The continuous integration or delivery environment where this artifact was generated.
 * @param {number} [options.xArtifactClientInteractive] 1 if the client is an interactive shell. Otherwise 0
 * @param {string} [options.xArtifactTag] The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} File successfully uploaded
 */
export function uploadArtifact(ContentLength: number, hash: string, options?: UploadArtifactOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    header: {
      'Content-Length': ContentLength,
      'x-artifact-duration': options.xArtifactDuration,
      'x-artifact-client-ci': options.xArtifactClientCi,
      'x-artifact-client-interactive': options.xArtifactClientInteractive,
      'x-artifact-tag': options.xArtifactTag
    },
    path: {
      hash
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(uploadArtifactOperation, parameters)
}

export interface StatusOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface RecordEventsOptions {
  /**
   * The continuous integration or delivery environment where this artifact is downloaded.
   */
  xArtifactClientCi?: string
  /**
   * 1 if the client is an interactive shell. Otherwise 0
   */
  xArtifactClientInteractive?: number
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface ArtifactExistsOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DownloadArtifactOptions {
  /**
   * The continuous integration or delivery environment where this artifact is downloaded.
   */
  xArtifactClientCi?: string
  /**
   * 1 if the client is an interactive shell. Otherwise 0
   */
  xArtifactClientInteractive?: number
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface UploadArtifactOptions {
  /**
   * The time taken to generate the uploaded artifact in milliseconds.
   */
  xArtifactDuration?: number
  /**
   * The continuous integration or delivery environment where this artifact was generated.
   */
  xArtifactClientCi?: string
  /**
   * 1 if the client is an interactive shell. Otherwise 0
   */
  xArtifactClientInteractive?: number
  /**
   * The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`
   */
  xArtifactTag?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const statusOperation: api.OperationInfo = {
  path: '/v8/artifacts/status',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const recordEventsOperation: api.OperationInfo = {
  path: '/v8/artifacts/events',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const artifactExistsOperation: api.OperationInfo = {
  path: '/v8/artifacts/{hash}',
  method: 'head',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const downloadArtifactOperation: api.OperationInfo = {
  path: '/v8/artifacts/{hash}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const uploadArtifactOperation: api.OperationInfo = {
  path: '/v8/artifacts/{hash}',
  method: 'put',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
