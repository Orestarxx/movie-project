'use client'
import React from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import styles from './formStyle.module.css'

const FormForSearch = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    console.log(pathname);
    const { replace } = useRouter();
    function searchMovie(term: string) {
        console.log(term);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);


        } else {
            params.delete('query');

        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <Link href={
            {
                pathname: pathname,
                query:{page:1}
            }
        }>
            <div id={styles.formHolder}>
                <form action="">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <input
                        className={styles.searchInput}

                        onChange={(e) => {
                            searchMovie(e.target.value);

                        }}
                        defaultValue={searchParams.get('query')?.toString()}
                    />
                </form>

            </div>
         </Link>
    );
};

export default FormForSearch;