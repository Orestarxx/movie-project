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
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"

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