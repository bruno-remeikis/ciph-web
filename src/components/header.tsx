import { useRouter } from 'next/router';
import Link from 'next/link';

import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';

import styles from '../styles/components/Header.module.scss';

export default function Header()
{
    const router = useRouter();

    function handleBack()
    {
        if(router.pathname !== '/')
            router.back();
    }

    return(
        <header className={styles.header}>
            <div className={styles.rightBox}>
                <button
                    className={styles.backBtn}
                    onClick={handleBack}
                >
                    <FiArrowLeft size={20} style={{ visibility: router.pathname !== '/' ? 'visible' : 'hidden' }}  />
                </button>

                <Link href='/'>
                    <h1>Ciphersonal</h1>
                </Link>
            </div>

            <button
                className={styles.menuBtn}
            >
                <FiMoreVertical size={20} />
            </button>
        </header>
    );
}