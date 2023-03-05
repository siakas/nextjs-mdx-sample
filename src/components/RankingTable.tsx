import type { FC } from 'react'

type Props = {
  month: string
  rankingData: Array<{
    slug: string
    title: string
  }>
}

const RankingTable: FC<Props> = ({ month, rankingData }) => {
  const fontColor: any = {
    1: 'gold',
    2: 'silver',
    3: 'brown',
  }

  return (
    <table className="leading-normal my-8">
      <caption className="text-center text-xs font-semibold text-gray-600">
        {month}のお気に入り数ランキング
      </caption>
      <tbody>
        {rankingData.map((item, index) => (
          <tr key={item.slug}>
            <th
              style={{ color: fontColor[index + 1] || 'currentColor' }}
              className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5"
            >
              {index + 1}位
            </th>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
              {item.title}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RankingTable
