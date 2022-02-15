import Router from 'next/router';
import Link from 'next/link';

import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';

import styles from '../styles/components/Header.module.scss';

export default function Header()
{
    return(
        <header className={styles.header}>
            <div className={styles.rightBox}>
                <button
                    className={styles.backBtn}
                    onClick={() => Router.back()}
                >
                    <FiArrowLeft size={20} color='white'  />
                </button>

                <Link href='/'>
                    <h1>Ciphersonal</h1>
                </Link>
            </div>

            <button
                className={styles.menuBtn}
            >
                <FiMoreVertical size={20} color='white' />
            </button>
        </header>
    );
}