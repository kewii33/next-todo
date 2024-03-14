import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden w-100% h-[700px] bg-[#000]">
      <video
        autoPlay
        muted
        loop
        className="absolute opacity-60 object-cover w-full h-full"
      >
        <source src="/videos/artlist.mp4" type="video/mp4" />
      </video>
      <div className="w-[1180px] mx-auto relative pt-[250px]">
        <h1 className="text-white text-[100px] leading-none mb-[20px]">
          열정, 의지력, 꾸준함
        </h1>
        <p className="text-white text-[20px] mb-[60px] pl-[15px]">
          열정이 습관으로 이어지는 나만의 투두 관리, TODOLAB에서 시작해보세요.
        </p>
        <Link href="/about" className="pl-[15px]">
          <button className="text-white text-[20px] w-[400px] h-[30px] border-solid border border-white-500 tracking-wider transition-all duration-500 hover:bg-white hover:text-[#555]">
            자세히 알아보기
          </button>
        </Link>
      </div>
    </div>
  );
}
