import React from 'react';
import { Brain, UserCircle } from 'lucide-react';
import VariantConstructor from './components/VariantConstructor';
import CourseProgress from './components/CourseProgress';
import RecommendedCourses from './components/RecommendedCourses';
import Analytics from './components/Analytics';
import AiChat from './components/AiChat';

function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="h-7 w-7 text-[#3b82f6]" />
              <h1 className="ml-2.5 text-xl font-semibold text-gray-900">Тренажер ЕГЭ</h1>
            </div>
            <button className="px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 flex items-center">
              <UserCircle className="w-4 h-4 mr-2" />
              Личный кабинет
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CourseProgress />
            <VariantConstructor />
          </div>
          <div className="space-y-8">
            <RecommendedCourses />
            <Analytics />
          </div>
        </div>
      </main>

      <AiChat />
    </div>
  );
}

export default App;