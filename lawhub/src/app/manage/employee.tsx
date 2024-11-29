import React, { useState } from "react";

function EmployeeForm() {
  const [employees, setEmployees] = useState([
    { id: 1, type: "3.3% 원천징수 대상자", days: "", pay: "", overtime: "" },
  ]);
  const [activeEmployee, setActiveEmployee] = useState(1);

  const addEmployee = () => {
    const newId = employees.length + 1;
    setEmployees([
      ...employees,
      {
        id: newId,
        type: "3.3% 원천징수 대상자",
        days: "",
        pay: "",
        overtime: "",
      },
    ]);
    setActiveEmployee(newId);
  };

  const handleInputChange = (id, field, value) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...employee, [field]: value } : employee
      )
    );
  };

  const handleSave = () => {
    console.log("저장된 직원 데이터:", employees);
  };

  const handleRemoveEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    if (id === activeEmployee) {
      setActiveEmployee(
        updatedEmployees.length ? updatedEmployees[0].id : null
      );
    }
  };

  return (
    <div>
      {/* 직원 탭 */}
      <div className="flex space-x-4 mb-6">
        {employees.map((employee) => (
          <button
            key={employee.id}
            className={`px-4 py-2 rounded-lg focus:outline-none ${
              activeEmployee === employee.id
                ? "bg-[#2AA7FF] text-white focus:ring focus:ring-blue-300"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveEmployee(employee.id)}
          >
            직원 {employee.id}
          </button>
        ))}
        <button
          className="bg-[#2AA7FF] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          onClick={addEmployee}
        >
          +
        </button>
      </div>

      {/* 선택된 직원의 폼 */}
      {employees.map(
        (employee) =>
          employee.id === activeEmployee && (
            <div key={employee.id} className="mb-4">
              {/* 직원 유형 */}
              <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
                <label className="text-gray-700 w-1/4 text-center">
                  직원 유형
                </label>
                <div className="flex flex-1 space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`type-${employee.id}`}
                      checked={employee.type === "3.3% 원천징수 대상자"}
                      onChange={() =>
                        handleInputChange(
                          employee.id,
                          "type",
                          "3.3% 원천징수 대상자"
                        )
                      }
                    />
                    <span>3.3% 원천징수 대상자</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`type-${employee.id}`}
                      checked={employee.type === "4대보험 가입자"}
                      onChange={() =>
                        handleInputChange(employee.id, "type", "4대보험 가입자")
                      }
                    />
                    <span>4대보험 가입자</span>
                  </label>
                </div>
              </div>

              {/* 주 근무 일수 */}
              <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
                <label className="text-gray-700 w-1/4 text-center">
                  주 근무 일수
                </label>
                <div className="flex flex-1 items-center space-x-2">
                  <input
                    type="number"
                    value={employee.days}
                    onChange={(e) =>
                      handleInputChange(employee.id, "days", e.target.value)
                    }
                    className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <span className="text-gray-700">일</span>
                </div>
              </div>

              {/* 급여 */}
              <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
                <label className="text-gray-700 w-1/4 text-center">급여</label>
                <div className="flex flex-1 items-center space-x-2">
                  <select
                    value={employee.pay}
                    onChange={(e) =>
                      handleInputChange(employee.id, "pay", e.target.value)
                    }
                    className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <option value="시급">시급</option>
                    <option value="월급">월급</option>
                  </select>
                  <input
                    type="number"
                    value={employee.payAmount}
                    onChange={(e) =>
                      handleInputChange(
                        employee.id,
                        "payAmount",
                        e.target.value
                      )
                    }
                    className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <span className="text-gray-700">원</span>
                </div>
              </div>
              <div className="mb-6 flex items-center space-x-4 border-b border-[#F0F0F5] pb-6">
                <label className="text-gray-700 w-1/4 text-center">
                  초과 근로
                </label>
                <div className="flex flex-1 items-center space-x-2">
                  <select
                    value={employee.pay}
                    onChange={(e) =>
                      handleInputChange(employee.id, "pay", e.target.value)
                    }
                    className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <option value="야간">야간</option>
                    <option value="주간">주간</option>
                  </select>
                  <input
                    type="number"
                    value={employee.payAmount}
                    onChange={(e) =>
                      handleInputChange(
                        employee.id,
                        "payAmount",
                        e.target.value
                      )
                    }
                    className="w-1/3 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <span className="text-gray-700">원</span>
                </div>
              </div>

              {/* 버튼들 */}
              <div className="flex space-x-4 justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleRemoveEmployee(employee.id)}
                >
                  퇴직 처리
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleSave}
                >
                  저장하기
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default EmployeeForm;
