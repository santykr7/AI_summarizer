import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { copy, linkIcon, loader, tick } from '../assets';

const Demo = () => {

    const [article, setArticle] = useState({
        url: '',
        summary: '',
    })

    const handleSubmit = async (e) => {
        alert('submitted')
    }

    return (
        <section className='mt-16 w-full max-w-xl'>
            {/* {search} */}

            <div className="flex flex-col gap-2">
                <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
                    <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5' />

                    <input type="url" placeholder='Enter a URL' value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        required
                        className='url_input peer' />

                    <button type='submit' className='' >
                        Submit
                    </button>



                </form>

                {/* browser URL history */}

            </div>

            {/* display results */}
        </section>
    )
}

export default Demo
