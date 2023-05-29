import { useEffect, useState } from "react"

const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function useCatImage({ fact }) {

  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMG_URL}${imageUrl}` }

}