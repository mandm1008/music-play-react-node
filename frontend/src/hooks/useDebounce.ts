import { useState, useEffect } from 'react'

function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay)

    return () => clearTimeout(handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return debounceValue
}

export default useDebounce
