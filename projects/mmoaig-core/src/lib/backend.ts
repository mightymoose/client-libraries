enum EndpointUrl {
    BotEndpointUrl =              'v1/bots',
    UserEndpointUrl =             'v1/users',
    GithubRepositoryEndpointUrl = 'v1/github-repositories',
    GithubUserEndpointUrl =       'v1/github-users',
    MatchEndpointUrl =            'v1/matches'
}

export interface JSONAPIResourceObject<T, A, R> {
    id:             number;
    type:           T;
    attributes:     A;
    relationships?: R;
}

export interface JSONAPIListResponse<T, A, R> {
    data: JSONAPIResourceObject<T, A, R>[];
}

export interface JSONAPIResponse<T, A, R> {
    data: JSONAPIResourceObject<T, A, R>;
}

export interface Endpoint<T, A, R> {
    readonly url: EndpointUrl;
}

export interface BackendBotAttributes {
    readonly path: string;
}

export type BackendBot = JSONAPIResourceObject<'bots', BackendBotAttributes, never>;
export type BackendBotListResponse = JSONAPIListResponse<'bots', BackendBotAttributes, never>;
export type BackendBotResponse = JSONAPIResponse<'bots', BackendBotAttributes, never>;

export interface BackendUserAttributes {
    readonly username: string;
    readonly active:   boolean;
}

export type BackendUser = JSONAPIResourceObject<'users', BackendUserAttributes, never>;
export type BackendUserListResponse = JSONAPIListResponse<'users', BackendUserAttributes, never>;
export type BackendUserResponse = JSONAPIResponse<'users', BackendUserAttributes, never>;

export interface BackendGithubRepositoryAttributes {
    readonly name: string;
}

export type BackendGithubRepository = JSONAPIResourceObject<'github_repositories', BackendGithubRepositoryAttributes, never>;
export type BackendGithubRepositoryListResponse = JSONAPIListResponse<'github_repositories', BackendGithubRepositoryAttributes, never>;
export type BackendGithubRepositoryResponse = JSONAPIResponse<'github_repositories', BackendGithubRepositoryAttributes, never>;

export interface BackendGithubUserAttributes {
    readonly username: string;
}

export type BackendGithubUser = JSONAPIResourceObject<'github_users', BackendGithubUserAttributes, never>;
export type BackendGithubUserListResponse = JSONAPIListResponse<'github_users', BackendGithubUserAttributes, never>;
export type BackendGithubUserResponse = JSONAPIResponse<'github_users', BackendGithubUserAttributes, never>;

export interface BackendMatchAttributes {
    readonly status: BackendMatchStatus;
    readonly type:   BackendMatchType;
}

export type BackendMatch = JSONAPIResourceObject<'matches', BackendMatchAttributes, never>;
export type BackendMatchListResponse = JSONAPIListResponse<'matches', BackendMatchAttributes, never>;
export type BackendMatchResponse = JSONAPIResponse<'matches', BackendMatchAttributes, never>;

export enum BackendMatchType {
    RockPaperScissors = 'RockPaperScissors'
}

export enum BackendMatchStatus {
    MatchPending =    'MatchPending',
    MatchInProgress = 'MatchInProgress',
    MatchComplete  =  'MatchComplete',
    MatchCancelled =  'MatchCancelled'
}

export interface BackendMatchRelationships {
    participants: BackendBotListResponse;
}

export const BotEndpoint: Endpoint<'bots', BackendBotAttributes, never> = {
    url: EndpointUrl.BotEndpointUrl
};

export const MatchEndpoint: Endpoint<'matches', BackendMatchAttributes, never> = {
    url: EndpointUrl.MatchEndpointUrl
};

export const UserEndpoint: Endpoint<'users', BackendUserAttributes, never> = {
    url: EndpointUrl.UserEndpointUrl
};

export const GithubRepositoryEndpoint: Endpoint<'github_repositories', BackendGithubRepositoryAttributes, never> = {
    url: EndpointUrl.GithubRepositoryEndpointUrl
};

export const GithubUserEndpoint: Endpoint<'github_users', BackendGithubUserAttributes, never> = {
    url: EndpointUrl.GithubUserEndpointUrl
};
