import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import question_mark from "./assets/Vector.svg";
import left from "./assets/left.png";
import right from "./assets/right1.png";
import plus from "./assets/plus.png";
import image from "./assets/3image.png";
function App() {
  const [active, setActive] = useState("aboutme");
  const [images, setImage] = useState(null);
  const fileInputRef = useRef();
  const addImage = () => {
    fileInputRef.current.click();
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <div className="flex justify-center  bg-main-bg gap-10 h-[1080px] ">
        <div className="left bg-[#616161D1] w-[40%] rounded-3xl mt-28">
          <h1 className="font-zkarta font-normal text-lg leading-[25.2px] text-[#969696]  mt-[42px] px-5">
              
          </h1>
        </div>
        <div className="right mt-24 mr-10 ">
          <div className="right-top w-[720px] shadow-outer-shadow h-[316px] bg-[#363C43] rounded-[18.89px]  flex gap-[3px] mt-[17px]  ">
            <div className="left-column  w-6 h-[159.69px] flex flex-col items-center gap-[105px] mt-5 ml-3">
              <div>
                <img src={question_mark} alt="questionmark" />
              </div>
              <div className="w-6 h-[30.69px] rounded-[2.33px] flex flex-wrap gap-[1.38px]">
                <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
              </div>
            </div>
            <div className="buttonsAndWritings flex flex-col ml-[17px] ">
              <div className="buttons-section  shadow-custom-inset  mt-4 flex text-white h-[62px] w-[614px] bg-[#171717]  font-Poppins rounded-[23px] gap-[6px]  items-center justify-center">
                <button
                  onClick={() => {
                    setActive("aboutme");
                  }}
                  className={`rounded-2xl ${
                    active == "aboutme" && "bg-[#28292F] shadow-button-shadow "
                  }  w-[195px] h-[49px] py-[10px] px-[24px] text-lg font-medium `}
                >
                  Abount Me
                </button>
                <button
                  onClick={() => {
                    setActive("experiences");
                  }}
                  className={`rounded-2xl ${
                    active == "experiences" &&
                    "bg-[#28292F] shadow-button-shadow"
                  }  w-[195px] h-[49px] py-[10px] px-[24px] text-lg font-medium`}
                >
                  Experiences
                </button>
                <button
                  onClick={() => {
                    setActive("recommended");
                  }}
                  className={`rounded-2xl ${
                    active == "recommended" &&
                    "bg-[#28292F] shadow-button-shadow"
                  }  w-[195px] h-[49px] py-[10px] px-[24px] text-lg font-medium`}
                >
                  Recommended
                </button>
              </div>
              <h1 className="font-zkarta font-normal text-xl leading-[25.2px] text-[#969696]  mt-[42px]">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
                <br />
                <br />I was born and raised in Albany, NY& have been living in
                Santa Carla for the past 10 years my wife Tiffany and my 4 year
                old twin daughters- Emma and Ella. Both of them are just
                starting school, so my calender is usually blocked between 9-10
                AM. This is a...
              </h1>
            </div>
            <div className="extremerightscroll w-2 h-16 bg-custom-gradient rounded-lg mr-[13px] mt-[111px] shadow-right-hr-shadow  "></div>
          </div>
          <hr className="w-[612px]  h-1 my-[21px]  rounded-sm  mx-auto bg-hr-gradient shadow-horiztal-hr-shadow " />

          <div className="right-bottom w-[720px] h-[330px] bg-[#363C43] rounded-[18.89px] shadow-bottom-right flex gap-[3px] mt-[17px]">
            <div className="bottom-left">
              <div className="left-column  w-6 h-[159.69px] flex flex-col items-center gap-[105px] mt-5 ml-3">
                <div>
                  <img src={question_mark} alt="questionmark" />
                </div>
                <div className="w-6 h-[30.69px] rounded-[2.33px] flex flex-wrap gap-[1.38px]">
                  <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                  <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                  <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                  <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                  <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                  <div className="bg-[#4A4E54] w-[9.31px] h-[9.31px] rounded-[1.16px]"></div>
                </div>
              </div>
            </div>
            <div className="bottom-right w-[652px] h-[475px]">
              <div className="btns-row  flex justify-between   mt-[20px] ml-[20px] items-center ">
                <div>
                  <button className="bg-[#171717] shadow-gallery-inner-shadow text-white font-Poppins rounded-[20px] w-[149px] h-[62px] font-medium text-xl leading-[30px]">
                    Gallery
                  </button>
                </div>
                <div className="flex gap-6 justify-center ">
                  <button
                    onClick={addImage}
                    className="bg-[rgba(255, 255, 255, 0.03)] rounded-[104px] w-[131.2px] h-[46px] font-zkarta font-extrabold text-[12px] text-white shadow-add-image-shadows flex justify-center items-center"
                  >
                    <img src={plus} alt="" /> ADD IMAGE
                  </button>
                  <div className="flex gap-2 mr-4">
                    <button className="w-[45px] h-[45px] rounded-full shadow-left-right-shadows bg-left-right-bg flex items-center justify-center">
                      <img src={left} alt="leftright" />{" "}
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <button className="w-[45px] h-[45px] rounded-full shadow-left-right-shadows bg-left-right-bg flex items-center justify-center">
                      <img src={right} alt="leftright" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="imgs-row flex gap-10  mt-[55px] ml-5 overflow-x-auto ">
                <div className=" rounded-l w-[190px] h-[179px]">
                  <img src={image} alt="" />
                </div>
                <div className=" rounded-l w-[190px] h-[179px]">
                  <img src={image} alt="" width={190} h={179} />
                </div>
                <div className=" rounded-[24px] w-[190px] h-[179px]">
                  <img src={image} alt=""  width={190} h={179}/>
                </div>
                {images && (
                  <div className=" ">
                    <img className="rounded-[24px]   grayscale" src={images} alt=""  />
                  </div>
                )}
              </div>
            </div>
          </div>
          <hr className="w-[612px]  h-1 my-[21px]  rounded-sm  mx-auto bg-hr-gradient shadow-horiztal-hr-shadow" />
        </div>
      </div>
    </>
  );
}

export default App;
