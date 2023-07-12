import AdSense from "./adsense";

const Aside = () => {
  return (
    <div className="hidden my-14 grow md:mr-4 md:max-w-[30%] md:block">
      <div className="bg-white rounded-3xl px-5 py-3 shadow mb-5">
        <AdSense />
      </div>
    </div>
  );
};
export default Aside;
