import Head from 'next/head';
import { useState } from 'react';

import styles from './styles.module.scss';

export default function NewSong()
{
    const [name, setName] = useState('');
    const [artists, setArtists] = useState('');

    const createNewSong = event =>
    {
        event.preventDefault();

        alert('a');
    }

    return (
        <>
            <Head>
                <title>Ciph - New Song</title>
            </Head>
            
            <form onSubmit={createNewSong}>
                <label htmlFor='name'>Nome</label>
                <input
                    id='name'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <label htmlFor='artists'>Artistas / bandas</label>
                <input
                    id='artists'
                    value={artists}
                    onChange={event => setArtists(event.target.value)}
                />

                <button type='submit'>
                    Adicionar
                </button>
            </form>
        </>
    );
}