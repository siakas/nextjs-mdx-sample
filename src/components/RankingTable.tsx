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
    <table className="my-8 leading-normal">
      <caption className="text-center text-xs font-semibold text-gray-600">
        {month}のお気に入り数ランキング
      </caption>
      <tbody>
        {rankingData.map((item, index) => (
          <tr key={item.slug}>
            <th
              style={{ color: fontColor[index + 1] || 'currentColor' }}
              className="w-2/5 border-b border-gray-200 bg-white px-5 py-5 text-sm"
            >
              {index + 1}位
            </th>
            <td className="w-2/5 border-b border-gray-200 bg-white px-5 py-5 text-sm">
              {item.title}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RankingTable
