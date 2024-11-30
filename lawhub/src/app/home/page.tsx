"use client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Navigation from "../component/navgation";

export default function Home() {
  const router = useRouter();
  const [selectedTax, setSelectedTax] = useState(
    "부가가치세란 상품(재화)의 거래나 서비스(용역)의 제공과정에서 얻어지는 부가가치(이윤)에 대하여 과세하는 세금입니다."
  );

  const handleBusinessRegistration = () => {
    router.push("/business");
  };

  const handleTaxSelection = (tax) => {
    setSelectedTax(tax);
  };

  return (
    <div className="bg-blue-50 min-h-screen ">
      <Head>
        <title>LawHub</title>
        <meta name="description" content="LawHub" />
      </Head>

      <Navigation></Navigation>

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

          <p className="text-gray-600 mb-6">{selectedTax}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button
              className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleTaxSelection(
                  "종합소득세는 개인이 지난해 1년(2023년)간의 경제활동으로 얻은 소득에 대해서 납부하는 세금입니다."
                )
              }
            >
              <img src="/wallet.svg" alt="종합소득세" className="w-10 h-10" />
              <span className="text-gray-700">종합소득세</span>
            </button>

            <button
              className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleTaxSelection(
                  "부가가치세란 상품(재화)의 거래나 서비스(용역)의 제공과정에서 얻어지는 부가가치(이윤)에 대하여 과세하는 세금입니다."
                )
              }
            >
              <img src="/vat.svg" alt="부가가치세" className="w-10 h-10" />
              <span className="text-gray-700">부가가치세 (VAT)</span>
            </button>

            <button
              className="flex flex-col items-center bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleTaxSelection(
                  "4대보험이란 사회보험의 일부로서 연금보험 / 건강보험 / 고용보험 / 산재보험을 말합니다."
                )
              }
            >
              <img src="/ambulance.svg" alt="4대보험" className="w-10 h-10" />
              <span className="text-gray-700">4대보험</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
