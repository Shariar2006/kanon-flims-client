import Title from "../../components/Mainlayout/Share/Title";

const OurStory = () => {
    return (
        <div>
            <Title title='our story'></Title>
            <div className="hero min-h-[80vh]">
                <div className="max-w-4xl z-0 flex items-center justify-center flex-col lg:flex-row-reverse bg-gradient-to-r from-[#101010c6] to-[#494949a9]">
                    <img src="https://i.ibb.co/N3CvSy8/image.png" className="max-w-sm shadow-2xl" />
                    <div className="text-center text-[#FFDD6B] px-3 font2 mt-8 lg:mt-0">
                        <h1 className="text-3xl font-semibold uppercase">Rayhan Rafi</h1>
                        <p className="py-6">Founder of  Kanon Films and Film Director/Producer/Writer at BFDC(Bangladesh Film Development Corporation)
                        </p>
                        <br />
                        <p>Kanon Films has established itself as a leading film studio and a distribution company, as well as a premier visual effects studio.
                            Kanon Films has always explored new markets for its films, some of which have been China and Germany. In addition to these we have been syndicating our films in markets like Indonesia, Malaysia and Middle East
                        </p>
                        <br />
                        <p>The company is proud to serve as a home to some of the biggest film stars in the country, having built our reputation through powerful storytelling that is backed by originality, quality, and detail. We believe in creating and developing world-class content that not only entertains but also offers an enriching experience to the audience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;