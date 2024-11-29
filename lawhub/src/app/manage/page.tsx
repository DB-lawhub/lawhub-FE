"use client";
import { useState } from "react";
import EmployeeForm from "./employee";

export default function TaxCalculator() {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "소매업",
    businessType: "일반 사업자",
    income: "",
    expenses: "",
    deductions: "",
    childrenCount: "",
    vatType: "일반과세자",
  });

  const [employees, setEmployees] = useState([
    {
      id: 1,
      workDays: "",
      salaryType: "시급",
      salaryAmount: "",
      overtimeType: "야간",
      overtimeHours: "",
      employeeType: "3.3%",
    },
  ]);

  const addEmployee = (newEmployee) => {
    const id = employees.length + 1;
    setEmployees([...employees, { id, ...newEmployee }]);
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleEmployeeChange = (id, field, value) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === id ? { ...emp, [field]: value } : emp
      )
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTax = () => {
    // Placeholder for tax calculation logic
    alert("세금 계산 로직 구현 필요");
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
          필요한 정보를 입력하고 한번에 쉽고 빠르게 세금을 계산하세요!
        </h1>
        <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-black mb-4">
            사업장 기본 정보
          </h2>
          <div className="h-[2px] bg-[#2AA8FF] mb-4"></div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">사업장명</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">업종</label>
            <div className="flex flex-1 items-center space-x-4">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="소매업">소매업</option>
                <option value="서비스업">서비스업</option>
                <option value="제조업">제조업</option>
              </select>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="businessType"
                  value="일반 사업자"
                  checked={formData.businessType === "일반 사업자"}
                  onChange={handleInputChange}
                />
                <span>일반 사업자</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="businessType"
                  value="법인 사업자"
                  checked={formData.businessType === "법인 사업자"}
                  onChange={handleInputChange}
                />
                <span>법인 사업자</span>
              </label>
            </div>
          </div>

          <h2 className="text-xl font-bold text-black mt-6 mb-5">종합소득세</h2>
          <div className="h-[2px] bg-[#2AA8FF] mb-4"></div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">
              종합소득액
            </label>
            <div className="flex flex-1 items-center">
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleInputChange}
                className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span className="ml-2 text-gray-700">원</span>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">필요경비</label>
            <div className="flex flex-1 items-center">
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleInputChange}
                className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span className="ml-2 text-gray-700">원</span>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">소득공제</label>
            <div className="flex flex-1 items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">인적공제 합계</span>
                <input
                  type="number"
                  name="personalDeduction"
                  value={formData.personalDeduction}
                  onChange={handleInputChange}
                  className="w-1/2 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <span className="text-gray-700">원</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-700">국민연금 등 합계</span>
                <input
                  type="number"
                  name="pensionDeduction"
                  value={formData.pensionDeduction}
                  onChange={handleInputChange}
                  className="w-1/2 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <span className="text-gray-700">원</span>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">세액공제</label>
            <span className="text-gray-700">세액공제 자녀</span>
            <input
              type="number"
              name="childrenCount"
              value={formData.childrenCount}
              onChange={handleInputChange}
              className="w-40 flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <span className="text-gray-700">
              명 (소득금액이 100만원 이하인 만 20세 이하 자녀)
            </span>
          </div>

          <h2 className="text-xl font-bold text-black mt-6 mb-4">부가가치세</h2>
          <div className="h-[2px] bg-[#2AA8FF] mb-4"></div>

          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">분류</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 pr-10">
                <input
                  type="radio"
                  name="vatType"
                  value="일반과세자"
                  checked={formData.vatType === "일반과세자"}
                  onChange={handleInputChange}
                />
                <span>일반과세자</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="vatType"
                  value="간이과세자"
                  checked={formData.vatType === "간이과세자"}
                  onChange={handleInputChange}
                />
                <span>간이과세자</span>
              </label>
            </div>
          </div>
          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">매입</label>
            <div className="flex flex-1 items-center">
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleInputChange}
                className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span className="ml-2 text-gray-700">원</span>
            </div>
          </div>
          <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
            <label className="text-gray-700 w-1/4 text-center">매출액</label>
            <div className="flex flex-1 items-center">
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleInputChange}
                className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span className="ml-2 text-gray-700">원</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-black mb-4">직원</h2>
            <div className="h-[2px] bg-[#2AA8FF] mb-4"></div>
            {/* Divider for 직원 */}
            <EmployeeForm></EmployeeForm>
          </div>

          {/* 임대료 Section */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-black mb-4">임대료</h2>
            <div className="h-[2px] bg-[#2AA8FF] mb-4"></div>
            {/* Divider for 임대료 */}
            {/* 보증금 */}
            <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
              <label className="text-gray-700 w-1/4 text-center">보증금</label>
              <div className="flex flex-1 items-center space-x-2">
                <input
                  type="number"
                  name="deposit"
                  value={formData.deposit}
                  onChange={handleInputChange}
                  className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <span className="text-gray-700">원</span>
              </div>
            </div>
            {/* 월세 */}
            <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
              <label className="text-gray-700 w-1/4 text-center">월세</label>
              <div className="flex flex-1 items-center space-x-2">
                <input
                  type="number"
                  name="monthlyRent"
                  value={formData.monthlyRent}
                  onChange={handleInputChange}
                  className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <span className="text-gray-700">원</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={calculateTax}
              className="bg-[#2AA8FF] text-white px-6 py-2 rounded hover:bg-[#0080D8]"
            >
              세금 계산하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
