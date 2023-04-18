import type { Repository } from "shared/types/app";
import useFavoriteReposStore from "store/favoriteRepos";

interface CardProps {
  repository: Repository;
  isFavorite: boolean;
}

function Card({ repository, isFavorite }: CardProps) {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore(
    (state) => state
  );

  function toggleFavorite() {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
    } else {
      addFavoriteRepo(repository.id);
    }
  }
  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite} type="button">
        {isFavorite ? "dislike" : "like"}
      </button>
    </div>
  );
}

export default Card;
