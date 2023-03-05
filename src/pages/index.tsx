import type { NextPage } from 'next'
import OctoberRanking from '@/pages/october.mdx'

const Home: NextPage = () => {
  return (
    <>
      <div className="m-4 p-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <OctoberRanking
          components={{
            h2: 'h4',
            strong: (props) => <strong style={{ color: 'red' }} {...props} />,
          }}
        />
      </div>
    </>
  )
}

export default Home
