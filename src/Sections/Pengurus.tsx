// Pengurus.tsx
const Pengurus = () => {
  return (
    <section id="pengurus">
      <div className="w-full min-h-screen flex justify-center items-center border-b-2 px-40 pl-60">
        <div className="w-1/3 h-full">
          <p>Pengurus Content Here</p>
        </div>
        <div className="w-2/3 h-full flex flex-col gap-4 px-2 pt-16 pb-4">
          <div className="group relative bg-[#FFFFFF]/10 w-full h-64 rounded-xl shadow-xl">
            <img src="/photos/biru.png" className="absolute group-hover:scale-103 group-hover:-translate-y-1 bottom-0 left-20 h-86"/>
          </div>
          <div className="group relative bg-[#FFFFFF]/10 w-full h-64 rounded-xl shadow-xl">
            <img src="/photos/kuning.png" className="absolute group-hover:scale-103 group-hover:-translate-y-1 bottom-0 right-20 h-86"/>
          </div>
          <div className="group relative bg-[#FFFFFF]/10 w-full h-64 rounded-xl shadow-xl">
            <img src="/photos/pink.png" className="absolute group-hover:scale-103 group-hover:-translate-y-1 bottom-0 left-20 h-80"/>
          </div>
          <div className="group relative bg-[#FFFFFF]/10 w-full h-64 rounded-xl shadow-xl">
            <img src="/photos/putih.png" className="absolute group-hover:scale-103 group-hover:-translate-y-1 bottom-0 right-20 h-80"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pengurus;