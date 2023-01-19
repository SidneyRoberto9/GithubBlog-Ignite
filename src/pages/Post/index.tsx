import { useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";

import { IssuesContext } from "../../context/IssuesContext";
import { MainCard } from "./components/MainCard";
import { MarkDown, PostContainer } from "./styles";

export function Post() {
  const { id } = useParams()

  const getIssueById = useContextSelector(
    IssuesContext,
    ({ getIssueById }) => getIssueById,
  )

  const currentIssue = getIssueById(Number(id as string))

  if (currentIssue == undefined) {
    return <></>
  }

  return (
    <PostContainer>
      <MainCard currentIssue={currentIssue} />
      <MarkDown>{currentIssue.body}</MarkDown>
    </PostContainer>
  )
}
