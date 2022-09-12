import { Footer, Nav } from "../components";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Index() {
  return (
    <div>
      <Nav />
      <div className="bg-white text-pink">
        <img
          className="object-cover h-72 md:h-64 w-full"
          src="background-header.png"
          alt="profile"
        />
        <div className="mt-10 pb-8 mx-10">
          <h2 className="text-pink text-center text-xl md:text-3xl">
            100% Personal. 100% Premier.
          </h2>
          <p className="text-gray text-justify m-4 md:m-10 text-l md:text-2xl">
            Welcome to Premier Plate Fitness! We provide the finest online
            nutriton and fitness coaching.
          </p>
          <ul className="text-l md:text-2xl mx-auto">
            <li className="text-gray m-6">
              <AiOutlineCheckCircle
                className="inline text-pink mr-4"
                size={25}
              />
              Completely online. From the comfort of your home.
            </li>
            <li className="text-gray m-6">
              <AiOutlineCheckCircle
                className="inline text-pink mr-4"
                size={25}
              />
              Flexible nutrition plans based on your fitness goals.
            </li>
            <li className="text-gray m-6">
              <AiOutlineCheckCircle
                className="inline text-pink mr-4"
                size={25}
              />
              Can accomodate vegetarian, vegan, gluten free and other
              food-allergy related diets.
            </li>
            <li className="text-gray m-6">
              <AiOutlineCheckCircle
                className="inline text-pink mr-4"
                size={25}
              />
              Incorporate your favorite foods for long-term success.
            </li>
            <li className="text-gray m-6">
              <AiOutlineCheckCircle
                className="inline text-pink mr-4"
                size={25}
              />
              Help you decide what to order when going out to eat.
            </li>
          </ul>
          <div className="text-center">
            <a href="services">
              <button className="content-center bg-red text-white font-bold py-2 px-4 rounded uppercase text-xl md:text-2xl shadow">
                Online Programs
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
