// src/components/ChatWidget.jsx
import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
  if (!userInput.trim()) return;

  const userMessage = { from: "user", text: userInput };
  setMessages((prev) => [...prev, userMessage]);
  const lower = userInput.toLowerCase();
  setUserInput("");

  // Trả lời theo từ khóa đơn giản
  let reply = "Xin lỗi, tôi chưa hiểu bạn hỏi gì.";

  if (lower.includes("giờ làm việc")) {
    reply = "Phòng khám mở cửa từ 7h sáng đến 17h chiều, từ thứ 2 đến thứ 7.";
  } else if (lower.includes("bác sĩ")) {
    reply = "Chúng tôi có đội ngũ bác sĩ chuyên khoa giỏi, bạn có thể xem danh sách ở mục 'Bác sĩ'.";
  } else if (lower.includes("đặt lịch") || lower.includes("đăng ký khám")) {
    reply = "Bạn có thể đặt lịch khám bằng cách nhấn vào mục 'Đặt lịch' trên thanh menu.";
  } else if (lower.includes("địa chỉ")) {
    reply = "Phòng khám nằm tại 123 Đường Sức Khỏe, Quận 1, TP.HCM.";
  } else if (lower.includes("tạm biệt")) {
    reply = "Chào bạn! Chúc bạn nhiều sức khỏe.";
  }

  const botMessage = { from: "bot", text: reply };
  setMessages((prev) => [...prev, botMessage]);
};


  return (
    <div>
      {/* Nút mở chat */}
      <div
        onClick={toggleChat}
        //className="... hover:animate-bounce"
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-50 text-4xl animate-bounce"
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </div>

      {/* Hộp chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-[400px] h-[500px] w-80 h-96 bg-white shadow-lg rounded-lg border flex flex-col z-50">
          <div className="p-2 border-b font-bold text-center bg-blue-500 text-white">
            Trợ lý AI
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-base p-2 rounded-md ${
                msg.from === "user"
                    ? "bg-blue-100 text-right ml-10"
                    : "bg-gray-100 mr-10"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nhập câu hỏi..."
              className="flex-1 border rounded px-2 py-2 mr-2 text-base"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
