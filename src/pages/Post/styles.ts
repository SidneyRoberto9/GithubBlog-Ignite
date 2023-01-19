import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const MarkDown = styled(ReactMarkdown)`
  padding: 2.5rem;
`
