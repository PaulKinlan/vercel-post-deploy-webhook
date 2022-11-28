/** @module projects */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Allows to retrieve the list of projects of the authenticated user. The list will be paginated and the provided query parameters allow filtering the returned projects.
 * 
 * @param {object} options Optional options
 * @param {string} [options.from] Query only projects updated after the given timestamp
 * @param {string} [options.gitForkProtection] Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed
 * @param {string} [options.limit] Limit the number of projects returned
 * @param {string} [options.search] Search projects by the name field
 * @param {string} [options.repo] Filter results by repo. Also used for project count
 * @param {string} [options.repoId] Filter results by Repository ID.
 * @param {string} [options.repoUrl] Filter results by Repository URL.
 * @param {string} [options.excludeRepos] Filter results by excluding those projects that belong to a repo
 * @param {string} [options.edgeConfigId] Filter results by connected Edge Config ID
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The paginated list of projects
 */
export function getProjects(options?: GetProjectsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      from: options.from,
      gitForkProtection: options.gitForkProtection,
      limit: options.limit,
      search: options.search,
      repo: options.repo,
      repoId: options.repoId,
      repoUrl: options.repoUrl,
      excludeRepos: options.excludeRepos,
      edgeConfigId: options.edgeConfigId,
      teamId: options.teamId
    }
  }
  return gateway.request(getProjectsOperation, parameters)
}

/**
 * Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.
 * 
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The project was successfuly created
 */
export function createProject(options?: CreateProjectOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createProjectOperation, parameters)
}

/**
 * Get the information for a specific project by passing either the project `id` or `name` in the URL.
 * 
 * @param {object} idOrName The unique project identifier or the project name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The project information
 */
export function getProject(idOrName: any, options?: GetProjectOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getProjectOperation, parameters)
}

/**
 * Update the fields of a project using either its `name` or `id`.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The project was succesfuly updated
 */
export function updateProject(idOrName: string, options?: UpdateProjectOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(updateProjectOperation, parameters)
}

/**
 * Delete a specific project by passing either the project `id` or `name` in the URL.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The project was successfuly removed
 */
export function deleteProject(idOrName: string, options?: DeleteProjectOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(deleteProjectOperation, parameters)
}

/**
 * Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.
 * 
 * @param {object} idOrName The unique project identifier or the project name
 * @param {object} options Optional options
 * @param {object} [options.production] Filters only production domains when set to `true`.
 * @param {string} [options.gitBranch] Filters domains based on specific branch.
 * @param {object} [options.redirects] Excludes redirect project domains when \"false\". Includes redirect project domains when \"true\" (default).
 * @param {string} [options.redirect] Filters domains based on their redirect target.
 * @param {object} [options.verified] Filters domains based on their verification status.
 * @param {number} [options.limit] Maximum number of domains to list from a request (max 100).
 * @param {number} [options.since] Get domains created after this JavaScript timestamp.
 * @param {number} [options.until] Get domains created before this JavaScript timestamp.
 * @param {object} [options.order] Domains sort order by createdAt
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} Successful response retrieving a list of domains
 */
export function getProjectDomains(idOrName: any, options?: GetProjectDomainsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      production: options.production,
      gitBranch: options.gitBranch,
      redirects: options.redirects,
      redirect: options.redirect,
      verified: options.verified,
      limit: options.limit,
      since: options.since,
      until: options.until,
      order: options.order,
      teamId: options.teamId
    }
  }
  return gateway.request(getProjectDomainsOperation, parameters)
}

/**
 * Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The domain was successfully added to the project
 */
export function addProjectDomain(idOrName: string, options?: AddProjectDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(addProjectDomainOperation, parameters)
}

/**
 * Get project domain by project id/name and domain name.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {string} domain The project domain name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getProjectDomain(idOrName: string, domain: string, options?: GetProjectDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName,
      domain
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getProjectDomainOperation, parameters)
}

/**
 * Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {string} domain The project domain name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The domain was succesfully removed from the project
 */
export function removeProjectDomain(idOrName: string, domain: string, options?: RemoveProjectDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName,
      domain
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(removeProjectDomainOperation, parameters)
}

/**
 * Update a project domain's configuration, including the name, git branch and redirect of the domain.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {string} domain The project domain name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The domain was updated successfuly
 */
export function updateProjectDomain(idOrName: string, domain: string, options?: UpdateProjectDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName,
      domain
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(updateProjectDomainOperation, parameters)
}

/**
 * Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {string} domain The domain name you want to verify
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The project domain was verified successfully
 *   Domain is already verified
 */
export function verifyProjectDomain(idOrName: string, domain: string, options?: VerifyProjectDomainOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName,
      domain
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(verifyProjectDomainOperation, parameters)
}

/**
 * Retrieve the environment variable for a given project.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {string} id The unique ID for the environment variable to get the decrypted value.
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} 
 */
export function getProjectEnv(idOrName: string, id: string, options?: GetProjectEnvOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName,
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(getProjectEnvOperation, parameters)
}

/**
 * Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {object} options Optional options
 * @param {string} [options.gitBranch] If defined, the git branch of the environment variable to filter the results
 * @param {string} [options.decrypt] If true, the environment variable value will be decrypted
 * @param {string} [options.source] The source that is calling the endpoint.
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The list of environment variables for the given project
 */
export function filterProjectEnvs(idOrName: string, options?: FilterProjectEnvsOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      gitBranch: options.gitBranch,
      decrypt: options.decrypt,
      source: options.source,
      teamId: options.teamId
    }
  }
  return gateway.request(filterProjectEnvsOperation, parameters)
}

/**
 * Create one ore more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The environment variable was created successfully
 */
export function createProjectEnv(idOrName: string, options?: CreateProjectEnvOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(createProjectEnvOperation, parameters)
}

/**
 * Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {string} id The unique environment variable identifier
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The environment variable was successfully edited
 */
export function editProjectEnv(idOrName: string, id: string, options?: EditProjectEnvOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName,
      id
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(editProjectEnvOperation, parameters)
}

/**
 * Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.
 * 
 * @param {string} idOrName The unique project identifier or the project name
 * @param {string} keyOrId The unique environment variable identifier
 * @param {object} options Optional options
 * @param {string} [options.teamId] The Team identifier or slug to perform the request on behalf of.
 * @return {Promise<object>} The environment variable was successfully removed
 */
export function removeProjectEnv(idOrName: string, keyOrId: string, options?: RemoveProjectEnvOptions): Promise<api.Response<any>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      idOrName,
      keyOrId
    },
    query: {
      teamId: options.teamId
    }
  }
  return gateway.request(removeProjectEnvOperation, parameters)
}

export interface GetProjectsOptions {
  /**
   * Query only projects updated after the given timestamp
   */
  from?: string
  /**
   * Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed
   */
  gitForkProtection?: '1'|'0'
  /**
   * Limit the number of projects returned
   */
  limit?: string
  /**
   * Search projects by the name field
   */
  search?: string
  /**
   * Filter results by repo. Also used for project count
   */
  repo?: string
  /**
   * Filter results by Repository ID.
   */
  repoId?: string
  /**
   * Filter results by Repository URL.
   */
  repoUrl?: string
  /**
   * Filter results by excluding those projects that belong to a repo
   */
  excludeRepos?: string
  /**
   * Filter results by connected Edge Config ID
   */
  edgeConfigId?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CreateProjectOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetProjectOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface UpdateProjectOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface DeleteProjectOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetProjectDomainsOptions {
  /**
   * Filters only production domains when set to `true`.
   */
  production?: 'true'|'false'
  /**
   * Filters domains based on specific branch.
   */
  gitBranch?: string
  /**
   * Excludes redirect project domains when \"false\". Includes redirect project domains when \"true\" (default).
   */
  redirects?: 'true'|'false'
  /**
   * Filters domains based on their redirect target.
   */
  redirect?: string
  /**
   * Filters domains based on their verification status.
   */
  verified?: 'true'|'false'
  /**
   * Maximum number of domains to list from a request (max 100).
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
   * Domains sort order by createdAt
   */
  order?: 'ASC'|'DESC'
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface AddProjectDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetProjectDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface RemoveProjectDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface UpdateProjectDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface VerifyProjectDomainOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface GetProjectEnvOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface FilterProjectEnvsOptions {
  /**
   * If defined, the git branch of the environment variable to filter the results
   */
  gitBranch?: string
  /**
   * If true, the environment variable value will be decrypted
   */
  decrypt?: 'true'|'false'
  /**
   * The source that is calling the endpoint.
   */
  source?: string
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface CreateProjectEnvOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface EditProjectEnvOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

export interface RemoveProjectEnvOptions {
  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string
}

const getProjectsOperation: api.OperationInfo = {
  path: '/v9/projects',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createProjectOperation: api.OperationInfo = {
  path: '/v9/projects',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getProjectOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const updateProjectOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const deleteProjectOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getProjectDomainsOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/domains',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const addProjectDomainOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/domains',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getProjectDomainOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/domains/{domain}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const removeProjectDomainOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/domains/{domain}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const updateProjectDomainOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/domains/{domain}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const verifyProjectDomainOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/domains/{domain}/verify',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const getProjectEnvOperation: api.OperationInfo = {
  path: '/v1/projects/{idOrName}/env/{id}',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const filterProjectEnvsOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/env',
  method: 'get',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const createProjectEnvOperation: api.OperationInfo = {
  path: '/v10/projects/{idOrName}/env',
  method: 'post',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const editProjectEnvOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/env/{id}',
  method: 'patch',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}

const removeProjectEnvOperation: api.OperationInfo = {
  path: '/v9/projects/{idOrName}/env/{keyOrId}',
  method: 'delete',
  security: [
    {
      id: 'bearerToken'
    }
  ]
}
