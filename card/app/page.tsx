import Image from "next/image";
import VirtualCard from "./components/VirtualCard";
import ScrollUpButton from "./components/ScrollUpButton";
import ScrollSubtitle from "./components/ScrollSubtitle";
import {ProjectsDisplay} from "./components/ProjectsDisplay";

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <div className="flex justify-center items-center my-8 flex-col mx-8 ">
        <h2 className="text-xl md:text-4xl font-bold text-gray-800 bg-clip-text mb-3 md:mb-8 l">
          Welcome
        </h2>
          <ProjectsDisplay   />
      </div>
    </div>
  );
}
Home.displayName = 'Home';