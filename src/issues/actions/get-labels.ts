import { githubApi } from '../../api/github.api'
import { sleep } from '../../helpers'
import { GitHubLabel } from '../interfaces'

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500)
  const { data } = await githubApi.get<GitHubLabel[]>('/labels')
  return data
}
