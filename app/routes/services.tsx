import { Footer, Nav, Package } from "../components";

export default function Services() {
  return (
    <>
      <Nav />
      <div className="bg-white text-pink h-full">
        <img
          className="object-cover h-72 md:h-96 w-full"
          src="water.png"
          alt="about header"
        />
        <div className="py-10 mx-5 md:mx-10 lg:mx-20">
          <h2 className="text-pink text-center text-xl md:text-3xl">
            We believe that premium fitness begins with premium nutrition.
          </h2>
          <div className="container mx-auto p-8 my-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Package
                imageSrc="healthy-food.png"
                imageAlt="basic package"
                price={"$50.00"}
                header="1 Month Basic Nutrition Plan"
                subHeader="Consists of a nutrition plan tailored to your goals. Weekly check-ins are included."
              />
              <Package
                imageSrc="plates.png"
                imageAlt="premier package"
                price={"$99.00"}
                header="1 Month Premier Plate Coaching Plan"
                subHeader="Consists of a nutrition plan for body recomposition (burning fat and building muscle). Weekly check-ins are included, as well as 24/7 support via email."
              />
              <Package
                imageSrc="plates.png"
                imageAlt="premier package"
                price={"$180.00"}
                header="2 Months Premier Plate Coaching Plan"
                subHeader="Consists of a nutrition plan for body recomposition (burning fat and building muscle). Weekly check-ins are included, as well as 24/7 support via email."
              />
              <Package
                imageSrc="plates.png"
                imageAlt="premier package"
                price={"$250.00"}
                header="3 Months Premier Plate Coaching Plan"
                subHeader="Consists of a nutrition plan for body recomposition (burning fat and building muscle). Weekly check-ins are included, as well as 24/7 support via email."
              />
              <Package
                imageSrc="plates.png"
                imageAlt="premier package"
                price={"$480.00"}
                header="6 Months Premier Plate Coaching Plan"
                subHeader="Consists of a nutrition plan for body recomposition (burning fat and building muscle). Weekly check-ins are included, as well as 24/7 support via email."
              />
              <Package
                imageSrc="plates.png"
                imageAlt="premier package"
                price={"$900.00"}
                header="1 Year Premier Plate Coaching Plan"
                subHeader="Consists of a nutrition plan for body recomposition (burning fat and building muscle). Weekly check-ins are included, as well as 24/7 support via email."
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
