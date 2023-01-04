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
	const [imageUrl, setImageUrl] = useState<MemeObj>(initialMemeValue);

	const handleClick = () => {
		const randomId = Math.floor(Math.random() * memesData.data.memes.length);
		setImageUrl((prev) => {
			return {
				...prev,
				randomImage: memesData.data.memes[randomId].url
			}
		});
	};

	return (
		<main>

			<div className={styles['form']}>
				<input
					type="text"
					placeholder="Top text"
					className={styles['form-input']} />
				<input
					type="text"
					placeholder="Bottom text"
					className={styles['form-input']} />
				<button className={styles['form-button']} onClick={handleClick}>Get a new meme image</button>
			</div>

			<div className={styles['meme']}>
				<img className={styles['meme-image']} src={imageUrl.randomImage} alt="Meme" />
			</div>
		</main>
	)
}
