import { useMemo } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { getRankColor } from '~/tools'

function Chart({ data, percents }: { data: any; percents: { encodeId: string; percent: number }[] }) {
  useMemo(() => ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip), [])

  const options = useMemo(
    () => ({
      responsive: true
    }),
    []
  )
  const labels = useMemo(() => data.times.map((time: any) => `${time.hour}:00`), [data])
  const keys = useMemo(() => Object.keys(data.items), [data])

  const datasets = useMemo(
    () =>
      keys.map((key) => ({
        label: key,
        data: data.items[key].map((item: any) => item.counter),
        borderColor: getRankColor(percents.findIndex((value) => value.encodeId === key)),
        backgroundColor: getRankColor(percents.findIndex((value) => value.encodeId === key))
      })),
    [keys]
  )

  const lineData = useMemo(
    () => ({
      labels,
      datasets
    }),
    [labels, datasets]
  )

  return <Line options={options} data={lineData} />
}

export default Chart
