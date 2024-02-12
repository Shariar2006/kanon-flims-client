/* eslint-disable react/prop-types */

const Title = ({title}) => {
    return (
        <h1 className="text-center text-2xl md:text-5xl font1 text-white pt-8 uppercase border-b border-[#FFDD6B] w-52 md:w-[350px] mb-7 lg:mb-0 mx-auto">{title}</h1>
    );
};

export default Title;