import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import RenderList from '~/components/RenderList'
import { getHome } from '~/servers'

const cx = classNames.bind(styles)

function Home() {
  const [homeData, setHomeData] = useState<any>()

  useEffect(() => {
    getHome()
      .then((res) => res.data)
      .then((res) => {
        // console.log(res)

        setHomeData(res.data.items)
      })
  }, [])

  return (
    <div>
      <h2>Home Page</h2>
      {homeData &&
        homeData.map((item: any, i: number) => <RenderList key={i} sectionType={item.sectionType} data={item} />)}
    </div>
  )
}

export default Home
