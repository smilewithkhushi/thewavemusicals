import React from 'react';


const About = () => {
    return (
        <div className="md:w-full flex flex-col md:px-10 my-20 items-center">

            {/* heading font design scheme for the website */}
            <h1 className="my-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Untangle your
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Musical Strings
                </span></h1>

            {/* about the organization */}
            <p className="my-4 md:text-xl md:mx-4 font-normal text-justify text-gray-500 lg:text-xl">

                Welcome to The Wave Musicals!
                <br />

                Discover a symphony of possibilities at The Wave Musicals, your premier destination for online instrument shopping. Immerse yourself in the harmony of choice as we curate a diverse collection of musical instruments, ranging from the soulful resonance of harmoniums to the rhythmic beats of tablas and the versatile strumming of guitars.
                <br />
                At The Wave Musicals, we understand the language of music and strive to provide enthusiasts, beginners, and professionals alike with an extensive selection of high-quality instruments. Our passion for music fuels our commitment to offering instruments that inspire and elevate your musical journey.

            </p>

        </div>
    );
}

export default About;

