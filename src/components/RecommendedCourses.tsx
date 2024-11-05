import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Алгебра',
    level: 'Базовый уровень',
    progress: 60,
    lessons: 12,
  },
  {
    id: 2,
    title: 'Геометрия',
    level: 'Продвинутый уровень',
    progress: 30,
    lessons: 15,
  },
  {
    id: 3,
    title: 'Теория вероятностей',
    level: 'Базовый уровень',
    progress: 45,
    lessons: 8,
  },
];

export default function RecommendedCourses() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Рекомендуемые курсы</h2>
      
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.level}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                  <span>{course.lessons} уроков</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  );
}