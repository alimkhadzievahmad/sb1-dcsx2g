import React, { useState } from 'react';
import { Send, Bot, User, ChevronDown, X, Maximize2, Minimize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Привет! Я ваш персональный помощник по математике. Как я могу помочь вам сегодня?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: 'Я помогу вам разобраться с этим вопросом. Давайте рассмотрим его подробнее.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#3b82f6] text-white p-4 rounded-full shadow-lg hover:bg-[#2563eb] transition-colors"
      >
        <Bot className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed right-6 bottom-6 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 ${
        isMinimized ? 'h-[60px]' : 'h-[600px]'
      } w-[400px]`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <Bot className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Математический ассистент</h3>
            <span className="text-xs text-green-500">В сети</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4 text-gray-500" />
            ) : (
              <Minimize2 className="w-4 h-4 text-gray-500" />
            )}
          </button>
          <button
            onClick={toggleChat}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="p-4 h-[460px] overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.sender === 'user'
                        ? 'bg-blue-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <User className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Bot className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Введите ваш вопрос..."
                className="flex-1 p-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}