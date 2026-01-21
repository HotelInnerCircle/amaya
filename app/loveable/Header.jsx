import Image from "next/image";
import { Button } from "../components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/assests/Amaya_Logo_Final_copy.png"
          alt="AMAYA Logo"
          width={150}
          height={60}
          className="h-auto w-[150px] object-contain"
          priority
        />

        <Button variant="outline" size="sm" className="text-xs">
          Pre-Launch Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
