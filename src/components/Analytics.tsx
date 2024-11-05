import React from 'react';
import { BarChart3, PieChart, TrendingUp, Clock } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Аналитика</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Успеваемость</h3>
          </div>
          <div className="space-y-3">
            {['Алгебра', 'Геометрия', 'Вероятности'].map((subject, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{subject}</span>
                  <span className="text-gray-900 font-medium">{75 + i * 5}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${75 + i * 5}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <PieChart className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Распределение</h3>
          </div>
          <div className="flex items-center justify-center h-[120px]">
            <div className="w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-900">78%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Прогресс</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Решено задач</span>
              <span className="text-sm font-medium text-gray-900">145</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Правильных ответов</span>
              <span className="text-sm font-medium text-green-600">89%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Время</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Среднее время на задачу</span>
              <span className="text-sm font-medium text-gray-900">4.5 мин</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Всего времени</span>
              <span className="text-sm font-medium text-gray-900">12.4 ч</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}