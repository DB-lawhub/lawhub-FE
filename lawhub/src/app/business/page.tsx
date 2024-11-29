"use client";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BusinessDashboard() {
  const router = useRouter();
  const [businesses, setBusinesses] = useState([
    {
      name: "DB 마스터즈",
      address: "서울특별시 강남구 테헤란로 123",
      type: "통신업",
      typeId: 1,
      image: "/business-images/com-1.svg",
    },
    {
      name: "데이터베이스 빌더스",
      address: "서울특별시 성동구 성수이로 456",
      type: "통신업",
      typeId: 2,
      image: "/business-images/com-2.svg",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBusiness, setNewBusiness] = useState({
    name: "",
    address: "",
    type: "소매업",
    typeId: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "type") {
      const selectedIndex = businessTypes.indexOf(value);
      setNewBusiness({
        ...newBusiness,
        type: value,
        typeId: selectedIndex + 1,
      });
    } else {
      setNewBusiness({ ...newBusiness, [name]: value });
    }
  };

  const addBusiness = () => {
    const imageIndex = businesses.length + 1;
    const newBusinessWithImage = {
      ...newBusiness,
      image: `/business-images/com-${imageIndex}.svg`,
    };

    if (newBusiness.name && newBusiness.address) {
      setBusinesses([...businesses, newBusinessWithImage]);
      setNewBusiness({ name: "", address: "", type: "소매업", typeId: 1 });
      setIsModalOpen(false);
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

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

  return (
    <div className="bg-blue-50 min-h-screen">
      <Head>
        <title>LawHub - 내 사업 대시보드</title>
        <meta name="description" content="Manage your businesses with LawHub" />
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
            <a href="#" className="text-gray-700 font-bold pt-2">
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
        <h2 className="text-3xl font-bold text-[#2AA8FF] mb-6">
          내 사업 대시보드
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow flex flex-col items-start"
            >
              <div className="flex items-center mb-4">
                <img
                  src={business.image}
                  alt="Business Icon"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {business.name}
                  </h3>
                  <p className="text-gray-600">{business.address}</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-4 justify-end w-full">
                <button className="bg-white border-2 border-blue-300 text-[#2AA8FF] px-4 py-2 rounded">
                  {business.type}
                </button>
                <button
                  className="bg-[#2AA8FF] text-white px-4 py-1 rounded hover:bg-[#0080D8]"
                  onClick={() => router.push("/manage")}
                >
                  세금 및 직원 관리
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-[#2AA8FF]">
              새 사업 추가
            </h3>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">사업명</label>
              <input
                type="text"
                name="name"
                value={newBusiness.name}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">주소</label>
              <input
                type="text"
                name="address"
                value={newBusiness.address}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">사업 종류</label>
              <select
                name="type"
                value={newBusiness.type}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
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
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                취소
              </button>
              <button
                onClick={addBusiness}
                className="bg-[#2AA8FF] text-white px-4 py-2 rounded hover:bg-[#0080D8]"
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
