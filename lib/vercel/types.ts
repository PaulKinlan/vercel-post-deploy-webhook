/** @module types */
// Auto-generated, edits will be overwritten

namespace api {
export interface OpenApiSpec {
  host: string
  basePath: string
  schemes: string[]
  contentTypes: string[]
  accepts: string[]
  securityDefinitions?: {[key: string]: SecurityDefinition}
}

export interface SecurityDefinition {
  type: 'basic'|'apiKey'|'oauth2'
  description?: string
  name?: string
  in?: 'query'|'header'
  flow?: 'implicit'|'password'|'application'|'accessCode'
  authorizationUrl?: string
  tokenUrl?: string
  scopes?: {[key: string]: string}
}

export type CollectionFormat = 'csv'|'ssv'|'tsv'|'pipes'|'multi'
export type HttpMethod = 'get'|'put'|'post'|'delete'|'options'|'head'|'patch'

export interface OperationInfo {
  path: string
  method: HttpMethod
  security?: OperationSecurity[]
  contentTypes?: string[]
  accepts?: string[]
}

export interface OperationSecurity {
  id: string
  scopes?: string[]
}

export interface OperationParamGroups {
  header?: {[key: string]: string}
  path?: {[key: string]: string|number|boolean}
  query?: {[key: string]: string|string[]|number|boolean}
  formData?: {[key: string]: string|number|boolean}
  body?: any
}

export interface ServiceRequest {
  method: HttpMethod
  url: string
  headers: { [index: string]: string }
  body: any
}

export interface RequestInfo {
  baseUrl: string
  parameters: OperationParamGroups
}

export interface ResponseOutcome {
  retry?: boolean
  res: Response<any>
}

export interface ServiceOptions {
  /**
   * The service url.
   *
   * If not specified then defaults to the one defined in the Open API
   * spec used to generate the service api.
   */
  url?: string
  /**
   * Fetch options object to apply to each request e.g 
   * 
   *     { mode: 'cors', credentials: true }
   * 
   * If a headers object is defined it will be merged with any defined in
   * a specific request, the latter taking precedence with name collisions.
   */
  fetchOptions?: any
  /**
   * Function which should resolve rights for a request (e.g auth token) given
   * the OpenAPI defined security requirements of the operation to be executed.
   */
  getAuthorization?: (security: OperationSecurity, securityDefinitions: any, op: OperationInfo) => Promise<OperationRightsInfo>
  /**
   * Given an error response, custom format and return a ServiceError
   */
  formatServiceError?: (response: FetchResponse, data: any) => ServiceError
  /**
   * Before each Fetch request is dispatched this function will be called if it's defined.
   * 
   * You can use this to augment each request, for example add extra query parameters.
   * 
   *     const params = reqInfo.parameters;
   *     if (params && params.query) {
   *       params.query.lang = "en"
   *     }
   *     return reqInfo
   */
  processRequest?: (op: OperationInfo, reqInfo: RequestInfo) => RequestInfo
  /**
   * If you need some type of request retry behavior this function
   * is the place to do it.
   * 
   * The response is promise based so simply resolve the "res" parameter
   * if you're happy with it e.g.
   * 
   *     if (!res.error) return Promise.resolve({ res });
   * 
   * Otherwise return a promise which flags a retry.
   * 
   *     return Promise.resolve({ res, retry: true })
   * 
   * You can of course do other things before this, like refresh an auth
   * token if the error indicated it expired.
   * 
   * The "attempt" param will tell you how many times a retry has been attempted.
   */
  processResponse?: (req: api.ServiceRequest, res: Response<any>, attempt: number) => Promise<api.ResponseOutcome>
  /**
   * If a fetch request fails this function gives you a chance to process
   * that error before it's returned up the promise chain to the original caller.
   */
  processError?: (req: api.ServiceRequest, res: api.ResponseOutcome) => Promise<api.ResponseOutcome>
  /**
   * By default the authorization header name is "Authorization".
   * This property allows you to override it.
   * 
   * One place this can come up is where your API is under the same host as
   * a website it powers. If the website has Basic Auth in place then some
   * browsers will override your "Authorization: Bearer <token>" header with
   * the Basic Auth value when calling your API. To counter this we can change
   * the header, e.g.
   * 
   *     authorizationHeader = "X-Authorization"
   * 
   * The service must of course accept this alternative.
   */
  authorizationHeader?: string
}

export type OperationRights = {[key: string]: OperationRightsInfo}

export interface OperationRightsInfo {
  username?: string
  password?: string
  token?: string
  apiKey?: string
}

export interface Response<T> {
  raw: FetchResponse
  /**
   * If 'error' is true then data will be of type ServiceError
   */
  data?: T
  /**
   * True if there was a service error, false if not
   */
  error?: boolean
}

export interface FetchResponse extends FetchBody {
  url: string
  status: number
  statusText: string
  ok: boolean
  headers: Headers
  type: string | FetchResponseType
  size: number
  timeout: number
  redirect(url: string, status: number): FetchResponse
  error(): FetchResponse
  clone(): FetchResponse
}

export interface FetchBody {
  bodyUsed: boolean
  arrayBuffer(): Promise<ArrayBuffer>
  blob(): Promise<Blob>
  formData(): Promise<FormData>
  json(): Promise<any>
  json<T>(): Promise<T>
  text(): Promise<string>
}

export interface FetchHeaders {
  get(name: string): string
  getAll(name: string): Array<string>
  has(name: string): boolean
}

export declare enum FetchResponseType { 'basic', 'cors', 'default', 'error', 'opaque' }

export class ServiceError extends Error {
  status: number
}

/**
 * Flux standard action meta for service action
 */
export interface ServiceMeta {
  res: FetchResponse
  info: any
}

}