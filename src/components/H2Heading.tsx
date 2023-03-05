import type { FC, ReactNode } from 'react'

type Props = {
  id: string
  readonly children: ReactNode
}

const H2Heading: FC<Props> = ({ id, children }) => {
  return (
    <h2 id={id}>
      <a href={`#${id}`} className="hover:underline">
        {children}
      </a>
    </h2>
  )
}

export default H2Heading
