import type { QueryFunctionContext } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from 'apis/users'

interface ReposFunctionContext extends QueryFunctionContext {
  queryKey: [string, string]
}

async function fetchRepos(ctx: ReposFunctionContext) {
  const [_, username] = ctx.queryKey
  const { data } = await getUsers(username)
  return data
}

export function useFetchRepositories(username: string) {
  return useQuery(['repos', username], fetchRepos)
}
