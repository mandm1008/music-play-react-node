import React, { useState, useEffect, useRef } from 'react'
import { useDebounce } from '~/hooks'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { ClearIcon, SearchIcon } from '~/components/Icons'
import SearchResultsTippy from '~/components/CustomTippy/SearchResultsTippy'
import { search } from '~/servers'

const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const debounceSearch = useDebounce(searchValue, 500)
  const [visible, setVisible] = useState(false)
  const [searchResults, setSearchResults] = useState({})

  const inputElement = useRef<HTMLInputElement>()

  useEffect(() => {
    if (searchValue.length === 0) return

    search(encodeURIComponent(searchValue))
      .then((res) => res.json())
      .then((res) => {
        const results = res.data && {
          msg: res.msg,
          artists: [res.data.artists[0]],
          playlists: [res.data.playlists[0]],
          songs: [...res.data.songs]
        }

        setSearchResults(results)
      })
      .catch(() => setSearchResults({ msg: 'Failed' }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch])

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      setSearchValue('')
      setSearchResults({})
      return
    }
    setSearchValue(e.target.value)
  }

  function handleClear() {
    setSearchValue('')
    setSearchResults({})
    inputElement.current && inputElement.current.focus()
  }

  return (
    <SearchResultsTippy
      visible={visible}
      hiddenResults={!searchValue}
      data={searchResults}
      hide={() => setVisible(false)}
    >
      <div
        className={cx('search', {
          active: visible
        })}
        onClick={() => setVisible(true)}
      >
        <SearchIcon className={cx('search-icon')} size={20} />
        <input
          ref={inputElement as React.LegacyRef<HTMLInputElement>}
          autoComplete="off"
          className={cx('search-input')}
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          spellCheck={false}
          value={searchValue}
          onChange={handleChangeInput}
        />
        <button className={cx('clear')} onClick={handleClear}>
          <ClearIcon size={14} />
        </button>
      </div>
    </SearchResultsTippy>
  )
}

export default Search
