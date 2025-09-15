const TesCard = () => {
  return (
    <div className="w-80 h-[28rem] relative flex justify-center items-start">
      {/* Shadow dramatis di belakang */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          clipPath:
            "polygon(30% 0, 100% 0, 100% 70%, 75% 100%, 0 100%, 0% 60%, 0 26%)",
          backgroundColor: "#fff",
          boxShadow: `
            0 15px 30px rgba(0,0,0,0.25),
            0 30px 60px rgba(0,0,0,0.2)
          `,
          zIndex: 0,
        }}
      />

      {/* Gambar menonjol */}
      <img
        src="photos/biru.png"
        alt="Profile"
        className="w-full h-full object-cover relative z-10"
        style={{
          clipPath:
            "polygon(30% 0, 100% 0, 100% 70%, 75% 100%, 0 100%, 0% 60%, 0 26%)",
          transform: "translateY(-20px) scale(1.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      />
    </div>
  );
};

export default TesCard;
