import Image from "next/image";
const NameComponent = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px]">
        <Image src="/512(2).gif" alt="512(2).gif" width={70} height={70} />
      </div>
      <p className="text-lg md:text-3xl lg:text-3xl dark:text-white">Hey! I</p>
      <p className="text-lg md:text-3xl lg:text-3xl dark:text-purple-300 text-purple-600">
        Abishek Mahenderaraja
      </p>
    </div>
  );
};

export default NameComponent;
