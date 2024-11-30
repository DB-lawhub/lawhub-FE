"use client";
import { useState } from "react";
import Head from "next/head";
import Navigation from "../component/navgation";

export default function MyPage() {
  const [selectedSection, setSelectedSection] = useState(
    "환영합니다! 설정 항목을 선택하여 세부 정보를 확인하세요."
  );

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <Head>
        <title>LawHub - 마이페이지</title>
        <meta name="description" content="LawHub MyPage" />
      </Head>

      <Navigation />

      <main className="max-w-4xl mx-auto mt-5 px-4">
        {/* 사용자 프로필 섹션 */}
        <section className="bg-white p-6 rounded-lg shadow mb-6 flex items-center space-x-6">
          <img
            src="/doctor.svg"
            alt="프로필 사진"
            className="w-30 h-30 rounded-3 border border-gray-200 shadow-sm"
          />
          <div>
            <h1 className="text-3xl font-bold text-[#2AA8FF] mb-3">
              <span className="text-black">My</span>Profile
            </h1>
            <p className="text-gray-600 mb-2">
              <strong>이름 </strong> 서은정
            </p>
            <p className="text-gray-600 mb-2">
              <strong>이메일 </strong> euneun@dgu.ac.kr
            </p>
            <p className="text-gray-600 mb-2">
              <strong>가입일자</strong> 2023년 5월 10일
            </p>
          </div>
        </section>

        {/* 설정 섹션 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            내 정보 및 설정
          </h2>
          <p className="text-gray-600 mb-6">{selectedSection}</p>

          {/* 설정 버튼 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              className="text-left bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleSectionChange(
                  "사용자 이름, 이메일, 연락처 정보를 수정할 수 있습니다."
                )
              }
            >
              프로필 관리
            </button>

            <button
              className="text-left bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleSectionChange(
                  "비밀번호를 업데이트하여 계정 보안을 강화하세요."
                )
              }
            >
              비밀번호 변경
            </button>

            <button
              className="text-left bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleSectionChange("나의 사업들을 확인할 수 있습니다.")
              }
            >
              내 사업 관리
            </button>

            <button
              className="text-left bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleSectionChange(
                  "이메일 및 푸시 알림 설정을 관리할 수 있습니다."
                )
              }
            >
              알림 설정
            </button>

            <button
              className="text-left bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleSectionChange(
                  "이중 인증 및 최근 로그인 기록을 확인하세요."
                )
              }
            >
              보안 설정
            </button>

            <button
              className="text-left bg-blue-50 p-4 rounded hover:bg-blue-100"
              onClick={() =>
                handleSectionChange(
                  "계정을 로그아웃합니다. 다시 로그인하려면 계정 정보가 필요합니다."
                )
              }
            >
              로그아웃
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
