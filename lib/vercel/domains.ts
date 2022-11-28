/** @module domains */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Check if a domain name is available for purchase.
 * 
 * @param {string} name The name of the domain for which we would like to check the status.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response checking if a Domain's name is available.
 */
export function checkDomainStatus(name: string, options?: CheckDomainStatusOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      name,
      teamId: options.teamId
    }
  }
  return gateway.request(checkDomainStatusOperation, parameters)
}

/**
 * Check the price to purchase a domain and how long a single purchase period is.
 * 
 * @param {string} name The name of the domain for which the price needs to be checked.
 * @param {object} options Optional options
 * @param {string} [options.type] In which status of the domain the price needs to be checked.
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response which returns the price of the domain and the period.
 */
export function checkDomainPrice(name: string, options?: CheckDomainPriceOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      name,
      type: options.type,
      teamId: options.teamId
    }
  }
  return gateway.request(checkDomainPriceOperation, parameters)
}

/**
 * Allows to purchase the specified domain.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response for purchasing a Domain.
 */
export function buyDomain(options?: BuyDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(buyDomainOperation, parameters)
}

/**
 * Get information for a single domain in an account or team.
 * 
 * @param {string} domain The name of the domain.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response retrieving an information for a specific domains.
 */
export function getDomain(domain: string, options?: GetDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      domain
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getDomainOperation, parameters)
}

/**
 * Retrieves a list of domains registered for the authenticating user. By default it returns the last 20 domains if no limit is provided.
 * 
 * @param {object} options Optional options
 * @param {number} [options.limit] Maximum number of domains to list from a request.
 * @param {number} [options.since] Get domains created after this JavaScript timestamp.
 * @param {number} [options.until] Get domains created before this JavaScript timestamp.
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response retrieving a list of domains.
 */
export function getDomains(options?: GetDomainsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      limit: options.limit,
      since: options.since,
      until: options.until,
      teamId: options.teamId
    }
  }
  return gateway.request(getDomainsOperation, parameters)
}

/**
 * Get a Domain's configuration.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getDomainConfig(options?: GetDomainConfigOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getDomainConfigOperation, parameters)
}

/**
 * Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.
 * 
 * @param {string} domain The name of the domain.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response removing a domain.
 */
export function deleteDomain(domain: string, options?: DeleteDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      domain
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(deleteDomainOperation, parameters)
}

/**
 * This endpoint is used for registering a new domain name with Vercel for the authenticating user, and also for initiating a domain transfer request from an external Registrar to Vercel.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function createOrTransferDomain(options?: CreateOrTransferDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createOrTransferDomainOperation, parameters)
}

export interface CheckDomainStatusOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CheckDomainPriceOptions {
  /**
   * In which status of the domain the price needs to be checked.
   */
  type?: 'new'|'renewal'
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface BuyDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetDomainsOptions {
  /**
   * Maximum number of domains to list from a request.
   */
  limit?: number
  /**
   * Get domains created after this JavaScript timestamp.
   */
  since?: number
  /**
   * Get domains created before this JavaScript timestamp.
   */
  until?: number
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetDomainConfigOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DeleteDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CreateOrTransferDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const checkDomainStatusOperation: api.OperationInfo = {
  path: '/v4/domains/status',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const checkDomainPriceOperation: api.OperationInfo = {
  path: '/v4/domains/price',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const buyDomainOperation: api.OperationInfo = {
  path: '/v4/domains/buy',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getDomainOperation: api.OperationInfo = {
  path: '/v5/domains/{domain}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getDomainsOperation: api.OperationInfo = {
  path: '/v5/domains',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getDomainConfigOperation: api.OperationInfo = {
  path: '/v6/domains/{domain}/config',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteDomainOperation: api.OperationInfo = {
  path: '/v6/domains/{domain}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createOrTransferDomainOperation: api.OperationInfo = {
  path: '/v4/domains',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
