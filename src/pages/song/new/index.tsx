import Head from 'next/head';

import styles from './styles.module.scss';

export default function NewSong()
{
    return (
        <>
            <Head>
                <title>Ciph - New Song</title>
            </Head>
            <h1 className={styles.teste}>New Song</h1>
        </>
    );
}