const TeamCard = () => {

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <div className="relative flex">
                <img src="/photos/biru.png"/>
                <img src="/photos/pink.png"/>
                <img src="/photos/putih.png"/>
                <img src="/photos/kuning.png"/>
                
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
            </div>
            
            
            <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 font-anton text-[14rem] text-red">
                PEMUDA BERPRESTASI
            </div>
        </div>
    )
}

export default TeamCard;