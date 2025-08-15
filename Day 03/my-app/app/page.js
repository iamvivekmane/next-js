import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5  size-80 bg-red-400 relative">

      <Image className="mx-auto object-cover" fill={true} src="https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg" alt="" />
    </div>
  );
}
