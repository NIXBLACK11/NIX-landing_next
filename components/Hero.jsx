// import ReactGA from "react-ga";

export const Hero = ({ refDownload, refFeatures }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    // ReactGA.event({
    //   category: "Download",
    //   action: "Scroll to Download",
    //   label: "Get Started Button",
    // });
  }

  function scrollToFeaturesSection(params) {
    refFeatures.current.scrollIntoView({ behavior: "smooth" });

    // ReactGA.event({
    //   category: "Features",
    //   action: "Scroll to Features",
    //   label: "Features Button",
    // });
  }

  return (
    <div className="text-white">
      <div className="max-w-[1000px] w-full md:mt-[100px] mt-[40px] mx-auto text-center flex flex-col px-10 space-y-5">
        <h1 className="txt-gradient md:text-7xl sm:text-5xl text-4xl font-bold ">
          The secure way to save passwords and more
        </h1>
        <p className="text-gray-300 text-2xl">
          Protect your valuable data from prying eyes. Liso&apos;s secure data vault
          is the perfect place to store passwords, files and any other
          information you need to keep safe.
        </p>
        <div className="flex gap-2 md:gap-5 flex-wrap mx-auto">
          <button className="btn-elevated" onClick={scrollToDownloadSection}>
            Get Started
          </button>
          <button className="btn-outlined" onClick={scrollToFeaturesSection}>
            Features
          </button>
        </div>
      </div>
    </div>
  );
};