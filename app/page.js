import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/navbar";
import logo from "@/assets/ngtlogo.jpg";
import HomeHero from "@/components/Homehero/Homehero";
import ProjectsAlbum from "@/components/ProjectsAlbum/ProjectsAlbum";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProjectsAlbum />
    </>
  );
}
