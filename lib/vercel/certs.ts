/** @module certs */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get cert by id
 * 
 * @param {string} id The cert id
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getCertById(id: string, options?: GetCertByIdOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getCertByIdOperation, parameters)
}

/**
 * Remove cert
 * 
 * @param {string} id The cert id to remove
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function removeCert(id: string, options?: RemoveCertOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(removeCertOperation, parameters)
}

/**
 * Upload a cert
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function uploadCert(options?: UploadCertOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(uploadCertOperation, parameters)
}

/**
 * Issue a new cert
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function issueCert(options?: IssueCertOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(issueCertOperation, parameters)
}

export interface GetCertByIdOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface RemoveCertOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface UploadCertOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface IssueCertOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const getCertByIdOperation: api.OperationInfo = {
  path: '/v7/certs/{id}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const removeCertOperation: api.OperationInfo = {
  path: '/v7/certs/{id}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const uploadCertOperation: api.OperationInfo = {
  path: '/v7/certs',
  method: 'put',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const issueCertOperation: api.OperationInfo = {
  path: '/v7/certs',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
