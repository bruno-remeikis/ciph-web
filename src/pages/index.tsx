import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { FiPlus, FiX } from 'react-icons/fi';

import api from '../services/api';

import styles from './styles.module.scss';

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
				{/* SEARCH */}
				<div className={styles.search}>
					<div className={styles.input}>
						<input placeholder='Pesquisar' />
						<button>
							<FiX size={12} />
						</button>
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
				<div className={styles.mainBtns}>
					{/*<button>^</button>*/}
					<button
						className={styles.newSongBtn}
						onClick={() => Router.push('/song/new')}
					>
						<FiPlus size={20} />
					</button>
				</div>
			</main>
		</>
	);
}