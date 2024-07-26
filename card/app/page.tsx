import Image from "next/image";
import VirtualCard from "./components/VirtualCard";
import ScrollUpButton from "./components/ScrollUpButton";
import ScrollSubtitle from "./components/ScrollSubtitle";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center my-8">
        {/* <h2 className="text-4xl font-bold text-gray-800 bg-clip-text text-left ml-20">
          Carta a Papá
        </h2> */}
        <ScrollSubtitle />
      </div>
      <VirtualCard />
      <ScrollUpButton />
    </>
  );
}
Home.displayName = 'Home';