import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

export function App() {
	const { fact, refresFact } = useCatFact()
	const { imageUrl } = useCatImage({ fact })

	const handleClick = async () => {
		refresFact()
	}

	return (
		<main>
			<h1>Cats Facts</h1>
			<button onClick={handleClick}>Get new fact</button>
			{fact && <p>{fact}</p>}
			{imageUrl && <img src={imageUrl} alt={`image extracted using first word for ${fact}`} />}
		</main >
	)

}
