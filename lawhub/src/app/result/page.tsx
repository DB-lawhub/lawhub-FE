"use client";
import { useState } from "react";

export default function TaxCalculator() {
  const [formData] = useState({
    businessName: "테스트 사업장",
    industry: "소매업",
    businessType: "일반 사업자",
    income: "50000000", // 임시 데이터
    expenses: "10000000", // 임시 데이터
    deductions: "2000000", // 임시 데이터
    childrenCount: "2", // 임시 데이터
    vatType: "일반과세자",
  });

  const calculateTax = () => {
    // Placeholder for tax calculation logic
    alert("세금 계산 로직 구현 필요");
  };
  
  const navigateHome = () => {
    router.push("/home");
  };

  return (
    <div>
      <header className="bg-blue-100 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="LawHub Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-[#2AA8FF]">LawHub</h1>
          </div>
          <nav className="flex space-x-4 pt-1">
            <a href="#" className="text-gray-700 font-bold pt-2">
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
      <div className="bg-blue-50 min-h-screen p-6">
        <h1 className="text-2xl font-bold text-center text-[#2AA8FF] mb-6">
          선택하신 사업의 세금 계산 결과입니다!
        </h1>
        <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-black mb-4">
            사업장 기본 정보
          </h2>
          <div className="h-[2px] bg-[#2AA8FF] mb-4"></div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">사업장명</label>
            <div className="flex-1">{formData.businessName}</div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">업종</label>
            <div className="flex flex-1 items-center space-x-4">
              <div>{formData.industry}</div>
              <div>{formData.businessType}</div>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">사업장명</label>
            <div className="flex-1">{formData.businessName}</div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">사업장명</label>
            <div className="flex-1">{formData.businessName}</div>
          </div>

          <h2 className="text-xl font-bold text-black mt-6 mb-5">종합소득세</h2>
          <div className="h-[2px] bg-[#2AA8FF] mb-4"></div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">
              종합소득액
            </label>
            <div className="flex-1">{formData.income} 원</div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">필요경비</label>
            <div className="flex-1">{formData.expenses} 원</div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">소득공제</label>
            <div className="flex flex-1 items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">인적공제 합계</span>
                <div>{formData.deductions} 원</div>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">자녀수</label>
            <div>{formData.childrenCount}</div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">
              부가세 과세유형
            </label>
            <div>{formData.vatType}</div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="bg-[#2AA8FF] text-white px-10 py-3 rounded-lg hover:bg-[#0080D8]"
              onClick={calculateTax}
            >
              세금 계산하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
