import React from 'react';

const page = async () => {
  const response = await fetch(`http://localhost:3000/api/company`);
  const companyInfo = await response.json();
  return (
    <div className="max-w-[1200px] min-w-[800px] h-[800px] mx-auto pt-[60px]">
      <div className="text-[#444] text-[30px] font-bold border-b-[1px] border-gray-500 pb-[10px]">
        {companyInfo.companyInfo.name}
      </div>
      <div className="pt-[30px] mb-[80px]">
        {companyInfo.companyInfo.description}
      </div>
      <div className="flex items-center flex justify-center mt-[30px]">
        <div className="w-[320px] h-[320px] flex flex-col flex justify-center flex items-center bg-gray-200 rounded-[12px]">
          <img
            src="/images/image1.png"
            alt="image1"
            className="w-[200px] h-[200px] mb-[20px]"
          />
          <div className="font-bold text-[20px] pb-[10px]">
            {companyInfo.companyInfo.image.image1}
          </div>
          <div>{companyInfo.companyInfo.image.imageDescription1}</div>
        </div>
        <div className="w-[320px] h-[320px] flex flex-col flex justify-center ml-[60px] flex items-center bg-gray-200 rounded-[12px]">
          <img
            src="/images/image2.png"
            alt="image2"
            className="w-[170px] h-[170px] mt-[15px]"
          />
          <div className="pt-[40px] font-bold text-[20px] pb-[10px]">
            {companyInfo.companyInfo.image.image2}
          </div>
          <div>{companyInfo.companyInfo.image.imageDescription2}</div>
        </div>
        <div className="w-[320px] h-[320px] flex flex-col flex justify-center ml-[80px] flex items-center bg-gray-200 rounded-[12px]">
          <img
            src="/images/image3.png"
            alt="image3"
            className="w-[200px] h-[200px] mb-[20px]"
          />
          <div className="font-bold text-[20px] pb-[10px]">
            {companyInfo.companyInfo.image.image3}
          </div>
          <div>{companyInfo.companyInfo.image.imageDescription3}</div>
        </div>
      </div>
    </div>
  );
};

export default page;
