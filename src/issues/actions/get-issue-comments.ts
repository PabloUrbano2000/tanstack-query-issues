import { githubApi } from '../../api/github.api'
import { sleep } from '../../helpers'
import { GitHubIssue } from '../interfaces/issue.interface'

export const getIssueComments = async (
  issueNumber: number
): Promise<GitHubIssue[]> => {
  await sleep(1500)

  const { data } = await githubApi.get<GitHubIssue[]>(
    `/issues/${issueNumber}/comments`
  )
  return data
}