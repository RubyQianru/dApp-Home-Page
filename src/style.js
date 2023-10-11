const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",
    flexColumn:"flex flex-col space-y-[2vw]",
    flexSpaceX: "flex space-x-[2vw]",
    flexSpaceBetween: "flex justify-between",

    paddingX: "sm:px-0 px-0",
    paddingY: "sm:py-12 py-4",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    buttonColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    dataGradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-[96px] font-bold",
    bgGradient:"bg-gradient-to-b from-[#12100e] to-[#2b4162]",

    heroText:"text-white",
    tableText:"w-[25%] flex justify-center py-4"
    

  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;