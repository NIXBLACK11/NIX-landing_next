import Logo from "../assets/logo.png";
import Image from "next/image";

export const NavBar = ({ refDownload, refPricing }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    // ReactGA.event({
    //   category: "Download",
    //   action: "Scroll to Download",
    //   label: "Download Button",
    // });
  }

  function scrollToPricingSection(params) {
    refPricing.current.scrollIntoView({ behavior: "smooth", block: "center" });

    // ReactGA.event({
    //   category: "Download",
    //   action: "Scroll to Download",
    //   label: "Download Button",
    // });
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1300px] mx-auto px-5">
      <div className="pr-3 min-w-[50px] w-[100px]">
        <Image src={Logo} alt="Liso Password Manager" />
      </div>
      <h1 className="w-full text-2xl md:text-4xl font-bold text-white">Liso</h1>
      <button
        className="btn-text mr-3"
        onClick={scrollToPricingSection}
      >
        Pricing
      </button>
      <button
        className="btn-elevated text-sm md:text-base min-w-[130px] md:w-[220px]"
        onClick={scrollToDownloadSection}
      >
        Free Download
      </button>
    </div>
  );
};