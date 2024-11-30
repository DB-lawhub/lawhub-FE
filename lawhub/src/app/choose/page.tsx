"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../component/navgation";

export default function BusinessDashboard() {
  const router = useRouter();
  const [businesses, setBusinesses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBusiness, setNewBusiness] = useState({
    business_registration: "개인",
    number_of_employees: 0,
    business_type: "소매업",
  });

  const businessTypes = [
    "석탄광업 및 채석업",
    "석회석·금속·비금속·기타광업",
    "식료품 제조업",
    "섬유 및 섬유제품 제조업",
    "목재 및 종이제품 제조업",
    "출판·인쇄·제본업",
    "화학 및 고무제품 제조업",
    "의약품·화장품·연탄·석유제품 제조업",
    "기계기구·금속·비금속광물제품 제조업",
    "금속제련업",
    "전기기계기구·정밀기구·전자제품 제조업",
    "선박건조 및 수리업",
    "수제품 및 기타제품 제조업",
    "전기·가스·증기·수도사업",
    "건설업",
    "철도·항공·창고·운수관련서비스업",
    "육상 및 수상운수업",
    "통신업",
    "임업",
    "어업",
    "농업",
    "시설관리 및 사업지원 서비스업",
    "기타의 각종사업",
    "전문·보건·교육·여가관련 서비스업",
    "도소매·음식·숙박업",
    "부동산 및 임대업",
    "국가 및 지방자치단체의 사업",
    "금융 및 보험업",
    "해외파견(건설, 벌목업을 포함한 전사업)",
  ];

  // API URL
  const API_URL = "http://127.0.0.1:8000/business/business/";

  // 전체 사업 데이터 불러오기
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 인증 정보 포함
        });
        if (response.ok) {
          const data = await response.json();
          setBusinesses(data);
        } else {
          console.error("사업 데이터를 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("API 요청 오류:", error);
      }
    };

    fetchBusinesses();
  }, []);

  // 신규 사업 추가하기
  const addBusiness = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBusiness),
      });

      if (response.ok) {
        const addedBusiness = await response.json();
        setBusinesses([...businesses, addedBusiness]);
        setNewBusiness({
          business_registration: "개인",
          number_of_employees: 0,
          business_type: "소매업",
        });
        setIsModalOpen(false);
      } else {
        alert("사업 추가 실패");
      }
    } catch (error) {
      console.error("사업 추가 중 오류:", error);
    }
  };

  // 삭제 요청
  const deleteBusiness = async (businessId) => {
    try {
      const response = await fetch(`${API_URL}${businessId}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBusinesses(businesses.filter((b) => b.id !== businessId));
      } else {
        console.error("사업 삭제 실패");
      }
    } catch (error) {
      console.error("삭제 요청 오류:", error);
    }
  };

  // 입력 값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBusiness({ ...newBusiness, [name]: value });
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <Head>
        <title>LawHub - 내 사업 대시보드</title>
        <meta name="description" content="Manage your businesses with LawHub" />
      </Head>

      <Navigation></Navigation>

      <main className="max-w-7xl mx-auto mt-5 px-4">
        <h2 className="text-3xl font-bold text-[#2AA8FF] mb-6">
          내 사업 대시보드
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white p-6 rounded-lg shadow flex flex-col items-start"
            >
              <h3 className="text-lg font-bold">{business.business_type}</h3>
              <p>등록 유형: {business.business_registration}</p>
              <p>직원 수: {business.number_of_employees}</p>
              <div className="flex space-x-4 mt-4 justify-end w-full">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => deleteBusiness(business.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center justify-center bg-blue-50 border-2 border-dashed border-blue-300 p-6 rounded-lg hover:bg-blue-100"
          >
            <span className="text-3xl text-blue-600 font-bold">+</span>
            <span className="text-gray-600 mt-2">새 사업 추가</span>
          </button>
        </div>
      </main>

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-[#2AA8FF]">
              새 사업 추가
            </h3>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">사업 등록 유형</label>
              <select
                name="business_registration"
                value={newBusiness.business_registration}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none"
              >
                <option value="개인">개인</option>
                <option value="법인">법인</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">직원 수</label>
              <input
                type="number"
                name="number_of_employees"
                value={newBusiness.number_of_employees}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">사업 종류</label>
              <select
                name="business_type"
                value={newBusiness.business_type}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg"
              >
                {businessTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                취소
              </button>
              <button
                onClick={addBusiness}
                className="bg-[#2AA8FF] text-white px-4 py-2 rounded"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
