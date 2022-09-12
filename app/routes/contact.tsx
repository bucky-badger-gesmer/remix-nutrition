import { Footer, Nav } from "../components";
export default function Contact() {
  return (
    <>
      <Nav />
      <div className="h-screen bg-white text-pink">
        <img
          className="object-cover h-72 md:h-64 w-full"
          src="contact-header.png"
          alt="contact-header"
        />
        <div className="h-1/2 m-10">
          <h2 className="text-pink text-center text-xl md:text-3xl">
            Contact Us
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
