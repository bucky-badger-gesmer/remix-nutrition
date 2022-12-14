interface PackageProps {
  imageSrc: string;
  imageAlt: string;
  price: string;
  header: string;
  subHeader: string;
}

const Package = ({
  imageSrc,
  imageAlt,
  price,
  header,
  subHeader,
}: PackageProps) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg md:flex-row md:max-w-xl mx-auto pb-0">
      <img
        className="object-cover w-full h-2/5 md:h-full rounded-t-lg md:w-1/2 md:rounded-none md:rounded-l-lg"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col justify-between p-4 my:auto leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{header}</h5>
        <p className="font-normal text-gray">{subHeader}</p>
        <a href="services" className="mt-8 mx-auto">
          <button className="content-center bg-red text-white font-bold py-2 px-4 rounded uppercase text-xl shadow">
            {price}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Package;
