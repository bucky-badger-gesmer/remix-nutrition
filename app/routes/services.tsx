import { Footer, Nav } from "../components";

export default function Services() {
  return (
    <>
      <Nav />
      <div className="h-screen bg-white text-pink">
        <img
          className="object-cover h-72 md:h-64 w-full"
          src="about-header.png"
          alt="about-header"
        />
        <div className="h-1/2 m-10">
          <h2 className="text-pink text-center text-xl md:text-3xl">
            Services
          </h2>
          <span className="text-pink text-l">
            We believe that premium fitness begins with premium nutrition.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
