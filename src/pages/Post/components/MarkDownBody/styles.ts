import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import styled from 'styled-components'

export const MarkDown = styled(ReactMarkdown)`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['blue-800']} !important;
`
