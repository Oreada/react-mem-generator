import { useState } from 'react';
import { memesData } from '../../api/memesData';
import styles from './MemeForm.module.css';

interface MemeObj {
	topText: string;
	bottomText: string;
	randomImage: string;
}

const initialMemeValue = {
	topText: '',
	bottomText: '',
	randomImage: 'https://i.imgflip.com/1h7in3.jpg',
};

export function MemeForm() {
	const [meme, setMeme] = useState<MemeObj>(initialMemeValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setMeme((prev) => {
			return {
				...prev,
				[name]: value,
			}
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const randomId = Math.floor(Math.random() * memesData.data.memes.length);
		setMeme((prev) => {
			return {
				...prev,
				randomImage: memesData.data.memes[randomId].url
			}
		});
	};

	return (
		<main>

			<form className={styles['form']} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Top text"
					className={styles['form-input']}
					name="topText"
					value={meme.topText}
					onChange={handleChange} />
				<input
					type="text"
					placeholder="Bottom text"
					className={styles['form-input']}
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange} />
				<button className={styles['form-button']}>Get a new meme image</button>
			</form>

			<div className={styles['meme']}>
				<img className={styles['meme-image']} src={meme.randomImage} alt="Meme" />
				<h2 className={styles['meme-text-top']}>{meme.topText}</h2>
				<h2 className={styles['meme-text-bottom']}>{meme.bottomText}</h2>
			</div>
		</main>
	)
}
