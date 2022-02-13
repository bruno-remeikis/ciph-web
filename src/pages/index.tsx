import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import api from '../services/api';

export default function Home()
{
  	const fetchData = () =>
	{
		//const response = await fetch("/api/person");

		console.log('fetching....');

		api.get('hello').then(res =>
		{
			/*
			if(!res.data.ok)
				throw new Error(`Error: ${res.status}`);
			*/

			console.log(res.data);
		});
	}

	return (
		<div>
			<Head>
				<title>Ciphersonal</title>
			</Head>

			<main className={styles.main}>
				{/* HEADER */}
				<header className={styles.header}>
					<h1>Ciphersonal</h1>
				</header>

				{/* SEARCH */}
				<div className={styles.search}>
					<div className={styles.input}>
						<input placeholder='Pesquisar' />
						<button>x</button>
					</div>

					<div className={styles.searchButtons}>
						<button onClick={() => fetchData()}>Tudo</button>
						<button>Musicas</button>
						<button>Artistas</button>
					</div>
				</div>

				{/* SONGS */}
				<div>
					<div>
						<span>Envolvidão</span>
						<span>Rael</span>
					</div>
					<div>
						<span>Rael</span>
					</div>
				</div>

				{/* BUTTONS */}
				<div>
					<button>^</button>
					<button>+</button>
				</div>
			</main>
		</div>
	)
}