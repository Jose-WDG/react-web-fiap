import { GithubUserRepos } from "../../pages/home/types";
import { Container, Repo } from "./style";

interface ReposListProps {
    repos: GithubUserRepos[]
}

function ReposList({ repos }: ReposListProps) {
    return <Container>
        {repos.map(
            repo => (
                <Repo key={repo.id}>
                    <strong>{repo.name}</strong>
                    <a href={repo.html_url}>{repo.html_url}</a>
                </Repo>
            ))}
    </Container>
}

export { ReposList };