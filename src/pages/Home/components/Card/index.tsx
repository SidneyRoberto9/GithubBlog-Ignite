import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import RemoveMarkdown from "remove-markdown";

import { CardContainer } from "./styles";

interface CardProps {
  id: number
  title: string
  content: string
  createdAt: string
}

export function Card({ id, title, content, createdAt }: CardProps) {
  const formatContent = RemoveMarkdown(content)

  return (
    <CardContainer to={`post/${id}`}>
      <section>
        <h1>{title}</h1>
        <time>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </time>
      </section>
      <p>{formatContent}</p>
    </CardContainer>
  )
}
