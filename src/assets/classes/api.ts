import type { Config } from '../types/config'
import type { GithubRepo, GithubUser } from '../types/github'

export class API {
  private apiURL: string

  constructor() {
    this.apiURL = 'https://api.github.com'
  }

  private fetch = async <T>(
    url: string,
    requestData: RequestInit | undefined = undefined,
  ): Promise<T | void> =>
    await fetch(url, requestData)
      .then((value) => value.json() as T)
      .catch((reason) => console.error(reason))

  getConfig = async () => await this.fetch<Config>('./config.json')

  getGitHubUser = async (username: string) =>
    await this.fetch<GithubUser>(`${this.apiURL}/users/${username}`)

  getGitHubRepos = async (username: string) =>
    await this.fetch<GithubRepo[]>(`${this.apiURL}/users/${username}/repos`)
}
