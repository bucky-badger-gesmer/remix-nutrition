import { Footer, Nav } from "../components";

export default function Index() {
  return (
    <>
      <Nav />
      <div className="h-screen bg-white text-pink">
        <img
          className="object-cover h-1/3 md:h-1/4 w-full"
          src="background-header.png"
          alt="profile"
        />
        <div className="h-1/2 m-10">
          <h2 className="text-pink text-center text-xl md:text-3xl">100% Personal. 100% Premier.</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
