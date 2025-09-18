import ProfileCard from "../Components/ProfileCard"

const Pengurus = () => {
  const data = [
    {
      name: "Charly Junicef Pratama",
      role: "Pendiri Yayasan Pemuda Berprestasi",
      photo: "/photos/biru.png",
      rotation: -2,
    },
    {
      name: "Emilia Nur Hayani",
      role: "Ketua Yayasan Pemuda Berprestasi",
      photo: "/photos/kuning.png",
      rotation: 2,
    },
    {
      name: "Lita haryana sari",
      role: "Sekertaris Yayasan Pemuda Berprestasi",
      photo: "/photos/pink.png",
      rotation: -1,
    },
    {
      name: "Rounnisa Aminy",
      role: "Bendahara Yayasan Pemuda Berprestasi",
      photo: "/photos/putih.png",
      rotation: -1,
    },
  ]

  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-6 px-10 border-b-2">
      {data.map((item, index) => (
        <ProfileCard
          key={index}
          name={item.name}
          role={item.role}
          photo={item.photo}
          rotation={item.rotation}
        />
      ))}
    </div>
  )
}

export default Pengurus
