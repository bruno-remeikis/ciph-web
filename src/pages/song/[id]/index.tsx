import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import api from '../../../services/api';

export default function Song()
{
    const router = useRouter();
    const { id } = router.query;
    console.log(`id: ${id}`);

    const [song, setSong] = useState(null);
    const [notFound, setNotFound] = useState<boolean>(false);

    useEffect(() =>
    {
        if(!router.isReady)
            return;

        setNotFound(false);

        if('song' in sessionStorage) {
            setSong(JSON.parse(sessionStorage.getItem('song')));
            sessionStorage.removeItem('song');
        }
        else
            api.get(`song/${id}`).then(res =>
            {
                setSong(res.data);
                console.log('res:');
                console.log(res.data);
            })
            .catch(err =>
            {
                if(err.response.status === 404) {
                    setNotFound(true);
                    return;
                }

                console.log(err);
                alert(err);
            });
    },
    [router.isReady]);

    return (
        <>
            <Head>
                <title>{ `Ciph - ${song?.song_name}` }</title>
            </Head>

            <h1>Song</h1>
            {!notFound
            ?
            <>
                <span>{ song?.song_name }</span>
                <span>{ song?.artist_name }</span>
            </>
            :
            <span>Song not found</span>}
        </>
    );
}