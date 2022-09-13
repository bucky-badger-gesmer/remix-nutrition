import { Footer, Nav, Package } from "../components";

export default function Services() {
  return (
    <>
      <Nav />
      <div className="bg-white text-pink h-full">
        <img
          className="object-cover h-72 md:h-96 w-full"
          src="avocados.png"
          alt="about header"
        />
        <div className="py-10 mx-5 md:mx-10">
          <h2 className="text-pink text-center text-xl md:text-3xl">
            We believe that premium fitness begins with premium nutrition.
          </h2>
          <div className="container p-8 my-8 mx-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Package
                imageSrc="water.png"
                imageAlt="basic package"
                price={20}
                header="Basic Nutrition Plan"
                subHeader="Consists of a nutrition plan tailored to your goals. Weekly check-ins are included."
              />
              <Package
                imageSrc="blueberries.png"
                imageAlt="premier package"
                price={50}
                header="Premier Online Coaching Plan"
                subHeader="Consists of a nutrition plan for body recomposition (burning fat and building muscle). Weekly check-ins are included, as well as 24/7 support via email."
              />
              <Package imageSrc="plates.png" imageAlt="deluxe package" price={100} header="Deluxe Online Coaching Plan" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
