import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-h-fit bg-lightGradient dark:bg-darkGradient text-black dark:text-white px-80 py-3">
      <Navbar />
    </div>
  );
}
