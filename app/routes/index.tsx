import { Footer, Nav } from "../components";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Index() {
  return (
    <div>
      <Nav />
      <div className="h-screen bg-white text-pink">
        <img
          className="object-cover h-1/3 md:h-1/4 w-full"
          src="background-header.png"
          alt="profile"
        />
        <div className="m-10">
          <h2 className="text-pink text-center text-xl md:text-3xl">
            100% Personal. 100% Premier.
          </h2>
          <p className="text-gray text-justify m-4 text-xl md:text-2xl">
            Welcome to Premier Plate Fitness! We offer the best online nutriton
            and fitness coaching, and we believe that premium fitness starts
            with premium nutrition.
          </p>
          <ul className="text-l md:text-2xl">
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
              Help you decide what to order when going out to eat.
            </li>
            <li className="text-gray m-6">
              <AiOutlineCheckCircle
                className="inline text-pink mr-4"
                size={25}
              />
              Incorporate your favorite foods for long-term success.
            </li>
          </ul>
          <div className="text-center mb-8">
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
