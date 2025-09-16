import { Link } from "react-router-dom"

const Header = () => {

    return(<>
        <div className="w-full h-24 bg-white/30 backdrop-blur-2xl flex justify-between items-center fixed px-40 z-[100]">
            <a href={""} className="font-anton text-[#97121A] text-4xl -skew-x-6 uppercase">
                pemuda berprestasi
            </a>
            <div className="flex items-center gap-10 text-black text-lg">
                <Link to={""} className="hover:text-red transition-all duration-200">
                    BERANDA
                </Link >
                <Link to={""} className="hover:text-red transition-all duration-200">  
                    KEGIATAN
                </Link >
                <Link to={""} className="hover:text-red transition-all duration-200">
                    PENGURUS
                </Link >
            </div>
        </div>
    </>)
}

export default Header