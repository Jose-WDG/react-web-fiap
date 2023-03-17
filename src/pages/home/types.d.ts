export interface GithubResponse {
    name: string;
    login: string;
    html_url: string;
    public_repos: number;
    avatar_url: string;
    bio: string;
    repos_url: string;
}

export interface GithubUserRepos {
    id: string;
    name: string;
    language: string;
    html_url: string;
}