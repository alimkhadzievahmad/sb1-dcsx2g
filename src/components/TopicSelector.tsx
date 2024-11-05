import React from 'react';
import { Sigma, BrainCog, Box, LineChart, Calculator } from 'lucide-react';

interface Topic {
  id: number;
  name: string;
  icon: React.ReactNode;
  count: number;
}

const topics: Topic[] = [
  { id: 1, name: 'Алгебра', icon: <Sigma className="w-6 h-6" />, count: 150 },
  { id: 2, name: 'Геометрия', icon: <Box className="w-6 h-6" />, count: 120 },
  { id: 3, name: 'Теория вероятностей', icon: <BrainCog className="w-6 h-6" />, count: 80 },
  { id: 4, name: 'Функции и графики', icon: <LineChart className="w-6 h-6" />, count: 100 },
  { id: 5, name: 'Текстовые задачи', icon: <Calculator className="w-6 h-6" />, count: 90 }
];

interface TopicSelectorProps {
  onSelect: (topicId: number) => void;
}

export default function TopicSelector({ onSelect }: TopicSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelect(topic.id)}
          className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
            {topic.icon}
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg text-gray-800">{topic.name}</h3>
            <p className="text-gray-500 text-sm">{topic.count} задач</p>
          </div>
        </button>
      ))}
    </div>
  );
}