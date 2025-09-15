interface ProfileProps {
  name?: string;
  role?: string;
  photo?: string; // URL string
  rotation?: number; // derajat rotasi, misal: 5, -3
}

const ProfileCard = ({
  name,
  role,
  photo,
  rotation,
}: ProfileProps) => {
  return (
    <div
      className="flex flex-col min-w-0 flex-shrink-0 w-[15rem] h-[22.5rem] md:w-[20rem] md:h-[30rem] items-start p-4 gap-3 justify-start bg-white shadow-2xl shadow-blue hover:scale-110 transition-transform duration-350 max-w-full overflow-hidden"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Foto */}
      <div className="w-full h-[12rem] md:h-[20rem] bg-amber-700 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nama dan Role */}
      <div className="pl-1 md:pl-2 w-full">
        <p className="text-[2rem] md:text-[2.5rem] font-bebas leading-none text-black truncate">
          {name}
        </p>
        <p className="text-[1rem] md:text-sm font-azaret text-blue truncate">
          {role}
        </p>
      </div>

    </div>
  );
};

export default ProfileCard;
