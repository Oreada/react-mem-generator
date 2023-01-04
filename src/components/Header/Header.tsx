import styles from './Header.module.css';
import LogoTroll from './troll-face.svg';

export function Header() {
	return (
		<>
			<header className={styles['header']}>
				<div className={styles['logo']}>
					<img className={styles['logo-image']} src={LogoTroll} alt='Logo: Troll face' />
					<h1 className={styles['logo-text']}>Meme Generator</h1>
				</div>
				<div className={styles['title']}>React Course - Project 3</div>
			</header>
		</>
	)
}
