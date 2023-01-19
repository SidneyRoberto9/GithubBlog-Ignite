import 'github-markdown-css'

import { MarkDown } from './styles'

interface MarkDownBodyProps {
  body: string
}

export function MarkDownBody({ body }: MarkDownBodyProps) {
  return <MarkDown className="markdown-body">{body}</MarkDown>
}
