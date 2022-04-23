import PlayerRepository from "src/repositories/player-repository";

interface RepositoriesContext {
    player: PlayerRepository;
}

export default interface Context {
    repositories: RepositoriesContext;
} 