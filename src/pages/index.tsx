import Card from 'shared/components/Card'
import { useFetchRepositories } from 'shared/hooks/useRepos'
import useFavoriteReposStore from 'store/favoriteRepos'

export default function IndexPage() {
  const { data, isLoading } = useFetchRepositories('maithevien9')
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      {data?.map(repository => (
        <Card isFavorite={favoriteReposIds.includes(repository.id)} key={repository.id} repository={repository} />
      ))}
    </div>
  )
}
