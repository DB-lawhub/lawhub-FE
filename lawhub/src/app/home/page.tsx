"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleBusinessRegistration = () => {
    router.push("/business");
  };

  return (
    <div className="bg-blue-50 min-h-screen ">
      <Head>
        <title>LawHub</title>
        <meta name="description" content="LawHub" />
      </Head>

      <header className="bg-blue-100 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="LawHub Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-[#2AA8FF]">LawHub</h1>
          </div>
          <nav className="flex space-x-4 pt-1">
            <a href="#" className="text-gray-700 hover:font-bold pt-2">
              세금 계산하기
            </a>
            <a href="#" className="text-gray-700 hover:font-bold pt-2">
              내 사업 관리
            </a>
            <a href="#" className="text-gray-700 hover:font-bold pt-2 pr-5">
              마이페이지
            </a>
            <button className="bg-[#2AA8FF] text-white px-10 py-2 rounded hover:bg-[#0080D8]">
              로그아웃
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto mt-5 px-4">
        <div className="text-left p-8 ">
          <h2 className="text-3xl text-black mb-4">
            데이터 입력만으로 다양한 계산 더욱 간편하게!
          </h2>
          <h1
            style={{ fontWeight: "900" }}
            className="text-5xl text-black font-black mb-4"
          >
            Law
            <span className="text-[#2AA8FF]">Hub</span>
          </h1>
          <p className="text-gray-600 mb-6">
            복잡한 세금과 월급, 비용 계산, 이제는 LawHub로 간편하게!
            <br />
            법률에 근거하여 정확하고 빠르게 결과를 제공합니다.
          </p>
          <button
            className="bg-[#2AA8FF] text-white px-6 py-3 rounded hover:bg-[#0080D8]"
            onClick={handleBusinessRegistration}
          >
            내 사업 등록하기
          </button>
        </div>

        <section className="mt-5 bg-white p-8 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-[#2AA8FF]">
              내 세금 계산하기
            </h3>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="더 많은 세금 종류를 검색"
                className="flex-grow border border-gray-300 px-4 py-2 rounded"
              />
              <button className="bg-[#2AA8FF] text-white px-6 py-3 rounded hover:bg-[#0080D8]">
                검색하기
              </button>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            부가가치세란 상품(재화)의 거래나 서비스(용역)의 제공과정에서
            얻어지는 부가가치(이윤)에 대하여 과세하는 세금입니다.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <button className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100">
              <img src="/wallet.svg" alt="종합소득세" className="w-10 h-10" />
              <span className="text-gray-700">종합소득세</span>
            </button>
            <button className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100">
              <img src="/receipt.svg" alt="취득세" className="w-10 h-10" />
              <span className="text-gray-700">취득세</span>
            </button>
            <button className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100">
              <img src="/vat.svg" alt="부가가치세" className="w-10 h-10" />
              <span className="text-gray-700">부가가치세 (VAT)</span>
            </button>
            <button className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100">
              <img src="/transform.svg" alt="양도세" className="w-10 h-10" />
              <span className="text-gray-700">양도세</span>
            </button>
            <button className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100">
              <img src="/ambulance.svg" alt="4대보험" className="w-10 h-10" />
              <span className="text-gray-700">4대보험</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
