/** @module dns */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.
 * 
 * @param {string} domain 
 * @param {object} options Optional options
 * @param {string} [options.limit] Maximum number of records to list from a request.
 * @param {string} [options.since] Get records created after this JavaScript timestamp.
 * @param {string} [options.until] Get records created before this JavaScript timestamp.
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response retrieving a list of paginated DNS records.
 */
export function getRecords(domain: string, options?: GetRecordsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      domain
    },
    query: {
      limit: options.limit,
      since: options.since,
      until: options.until,
      teamId: options.teamId
    }
  }
  return gateway.request(getRecordsOperation, parameters)
}

/**
 * Removes an existing DNS record from a domain name.
 * 
 * @param {string} domain 
 * @param {string} recordId 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response by removing the specified DNS record.
 */
export function removeRecord(domain: string, recordId: string, options?: RemoveRecordOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      domain,
      recordId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(removeRecordOperation, parameters)
}

/**
 * Updates an existing DNS record for a domain name.
 * 
 * @param {string} recordId The id of the DNS record
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function updateRecord(recordId: string, options?: UpdateRecordOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      recordId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(updateRecordOperation, parameters)
}

/**
 * Creates a DNS record for a domain.
 * 
 * @param {string} domain The domain used to create the DNS record.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response showing the uid of the newly created DNS record.
 */
export function createRecord(domain: string, options?: CreateRecordOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      domain
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createRecordOperation, parameters)
}

export interface GetRecordsOptions {
  /**
   * Maximum number of records to list from a request.
   */
  limit?: string
  /**
   * Get records created after this JavaScript timestamp.
   */
  since?: string
  /**
   * Get records created before this JavaScript timestamp.
   */
  until?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface RemoveRecordOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface UpdateRecordOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CreateRecordOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const getRecordsOperation: api.OperationInfo = {
  path: '/v4/domains/{domain}/records',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const removeRecordOperation: api.OperationInfo = {
  path: '/v2/domains/{domain}/records/{recordId}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const updateRecordOperation: api.OperationInfo = {
  path: '/v1/domains/records/{recordId}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createRecordOperation: api.OperationInfo = {
  path: '/v2/domains/{domain}/records',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
