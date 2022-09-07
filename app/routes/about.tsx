import { Footer, Nav } from "../components";

export default function About() {
  return (
    <>
      <Nav />
      <div className="h-screen bg-white text-pink">
        <img
          className="object-cover h-1/3 md:h-1/4 w-full"
          src="about-header.png"
          alt="about-header"
        />
        <div className="h-1/2 m-10">
          <h2 className="text-pink text-center text-xl md:text-3xl">
            About
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
