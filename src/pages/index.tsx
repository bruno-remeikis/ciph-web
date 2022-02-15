import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import api from '../services/api';

import Header from '../components/header';

import styles from '../styles/Home.module.scss';

type Song = {
	id: number;
	song_name: string;
	artist_name: string;
}

export default function Home()
{
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [songs, setSongs] = useState<Array<Song>>([]);

  	const loadSongs = () =>
	{
		setLoading(true);
		setError(false);

		api.get('feed').then(res =>
		{
			setSongs(res.data);
			setLoading(false);
		})
		.catch(err =>
		{
			/*switch(err.response.status)
			{
				case 405:
					alert('Método HTTP não suportado');
			}*/
			setError(true);
			console.log(err);
			alert(err);
		})
		.finally(() => setLoading(false));
	}

	useEffect(() => loadSongs(), []);

	return (
		<>
			<Head>
				<title>Ciphersonal</title>
			</Head>

			<main className={styles.main}>
				<Header />

				{/* SEARCH */}
				<div className={styles.search}>
					<div className={styles.input}>
						<input placeholder='Pesquisar' />
						<button>x</button>
					</div>

					<div className={styles.searchButtons}>
						<button onClick={() => loadSongs()}>Tudo</button>
						<button>Musicas</button>
						<button>Artistas</button>
					</div>
				</div>

				{/* SONGS */}
				<div className={styles.songs}>
					{!loading ? songs.map(song =>
						<button
							key={song.id}
							className={styles.song}
							onClick={() =>
							{
								//localStorage
								sessionStorage.setItem('song', JSON.stringify(song));
								Router.push(`/song/${song.id}`);
							}}
						>
							<span>{ song.song_name }</span>
							<span>{ song.artist_name }</span>
						</button>
					) : <span>Carregando...</span>}

					{error && <span>Erro</span>}
				</div>

				{/* BUTTONS */}
				<div>
					<button>^</button>
					<button>+</button>
				</div>
			</main>
		</>
	);
}