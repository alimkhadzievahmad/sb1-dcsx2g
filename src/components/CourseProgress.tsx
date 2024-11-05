import React from 'react';
import { Trophy } from 'lucide-react';

export default function CourseProgress() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">0</h2>
          <p className="text-sm text-gray-600">Решите 3 задачи, чтобы начать серию</p>
        </div>
        <Trophy className="w-12 h-12 text-[#fbbf24]" />
      </div>
      
      <div className="flex justify-between items-center">
        {['П', 'В', 'С', 'Ч', 'П'].map((day, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center mb-1">
              <span className="text-sm text-gray-400">{day}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
}