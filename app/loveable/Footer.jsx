import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto flex justify-center">
        <Image
          src="/assests/Amaya_Logo_Final.png"
          alt="AMAYA Logo"
          width={160}
          height={60}
          className="h-auto w-[160px] object-contain"
          priority
        />
      </div>
    </footer>
  );
};

export default Footer;
