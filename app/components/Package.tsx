
interface PackageProps {
  imageSrc: string;
  imageAlt: string;
  price: number;
  header: string;
  subHeader: string;
}

const Package = ({ imageSrc, imageAlt, price }: PackageProps) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl">
      <img
        className="object-cover w-full h-1/2  rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default Package;
