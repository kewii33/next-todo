import Report from '@/components/Report';
import React from 'react';

const page = () => {
  return (
    <div className="max-w-[1200px] min-w-[800px] h-[800px] mx-auto pt-[60px]">
      <p className="text-[#444] text-[30px] font-bold border-b-[1px] border-gray-500 pb-[10px]">
        TODO 통계 보기🏆
      </p>
      <div className="max-w-[1200px] min-w-[800px] h-[400px] flex flex-col items-center flex justify-center mt-[30px] pt-[30px] mb-[30px] text-[23px] border rounded-[12px] shadow-xl">
        <Report />
        <p className="text-[#777] text-[18px] font-bold pt-[30px]">
          오늘도 화이팅~🏃‍♀️
        </p>
      </div>
    </div>
  );
};

export default page;
