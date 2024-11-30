"use client";

import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path) => {
    router.push(path);
  };

  const navigateHome = () => {
    router.push("/home");
  };

  const isActive = (path) => pathname === path;

  const navItems = [
    { label: "내 사업 관리", path: "/business" },
    { label: "마이페이지", path: "/mypage" },
  ];

  return (
    <header className="bg-blue-100 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={navigateHome}
        >
          <img src="/logo.svg" alt="LawHub Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-[#2AA8FF]">LawHub</h1>
        </div>
        <nav className="flex space-x-4 pt-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`text-gray-700 pt-2 pb-3 ${
                isActive(item.path) ? "font-bold" : "hover:font-bold"
              }`}
              onClick={() => navigateTo(item.path)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="bg-[#2AA8FF] text-white px-10 py-2 rounded hover:bg-[#0080D8]"
            onClick={() => navigateTo("/login")}
          >
            로그아웃
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
