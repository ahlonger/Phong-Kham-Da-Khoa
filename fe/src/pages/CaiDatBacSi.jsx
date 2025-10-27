import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';

const CaiDatBacSi = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar2 isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } flex flex-col items-center justify-center p-6`}
      >
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Cài đặt bác sĩ</h1>
        <p className="text-gray-600 mb-2">Chức năng này đang được phát triển.</p>
        <p className="text-gray-600">Vui lòng quay lại sau.</p>
      </main>
    </div>
  );
};

export default CaiDatBacSi;
