import { Link } from 'react-router-dom'

function StringOfList({ data }: { data: any[] }) {
  return data.reduce(
    (prev: any, crr: any, i: number) =>
      i > 0
        ? [
            ...prev,
            ', ',
            <Link key={i} to={crr.link}>
              {crr.name}
            </Link>
          ]
        : [
            ...prev,
            <Link key={i} to={crr.link}>
              {crr.name}
            </Link>
          ],
    []
  )
}

export default StringOfList
