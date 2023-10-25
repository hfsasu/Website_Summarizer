//tells what the app does
import React from "react";
import { logo } from "../assets";

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'> {/*Header is the introductory componenets like the logo. take 100 of width, center the items, items will be in col not in row. */}
            <nav className='flex justify-between items-center w-full mb-10 pt-3'> {/*Contains navigation menu*/}
                <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/hfsasu")
                    }
                    className='black_btn'
                >
                    GitHub
                </button> {/* This will point to my github.*/}
            </nav>

            <h1 className='head_text'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='orange_gradient '>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify your reading with Summize, an open-source article summarizer
                that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>
    );
};

export default Hero;