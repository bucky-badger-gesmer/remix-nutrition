import { Footer, Nav } from '../components';

export default function Index() {
  return (
    <>
      <Nav />
      <div className="h-screen bg-white text-pink">
        <img
          className="object-cover h-1/2 w-full"
          src="background-header.png"
          alt="profile"
        />
        <h2>100% Personal. 100% Premier.</h2>
      </div>
      <Footer />
    </>
  );
}
