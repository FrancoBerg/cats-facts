import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMG = 'https://cataas.com'


export function App() {
	const [fact, setFact] = useState()
	const [image, setImage] = useState()

	useEffect(() => {
		fetch(CAT_ENDPOINT_FACT_URL)
			.then((res) => res.json())
			.then((data) => {
				const { fact } = data
				setFact(fact)

				const firstWord = fact.split(' ')[0]
				console.log(firstWord);

				fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
					.then(res => res.json())
					.then(data => {
						const { url } = data
						setImage(url)
					})
			})
	}, [])

	return (
		<main>
			<h1>Cats Facts</h1>
			{fact && <p>{fact}</p>}
			{image && <img src={`${CAT_PREFIX_IMG}${image}`} alt={`image extracted using first word for ${fact}`} />}
		</main >
	)

}
