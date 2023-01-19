export interface Issues {
  total_count: number
  incomplete_results: boolean
  items: Issue[]
}

export interface Issue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: any[]
  state: string
  locked: boolean
  assignee: null
  assignees: any[]
  milestone: null
  comments: number
  created_at: string
  upstringd_at: string
  closed_at: null
  author_association: string
  active_lock_reason: null
  body: string
  reactions: Reactions
  timeline_url: string
  performed_via_github_app: null
  state_reason: null
  score: number
}

export interface Reactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface GithubAccountIssue {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface GithubAccount {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: null
  blog: string
  location: string
  email: null
  hireable: null
  bio: string
  twitter_username: null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  upstringd_at: string
}