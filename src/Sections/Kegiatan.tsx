import LingkupCard from "../Components/LingkupCard"; 

const Kegiatan = () => {
  return (
    <>
      <div className="w-full h-screen z-50 flex flex-col py-20 gap-10 overflow-hidden">
        {/* Judul */}
        <div className="flex flex-col px-40 font-anton text-red text-8xl -skew-x-6 uppercase">
          Ruang 
          <span className="pl-24">Lingkup</span>
        </div>

        {/* Card Lingkup */}
        <div className="">
          <LingkupCard />
        </div>
      </div>
    </>
  );
};

export default Kegiatan;
