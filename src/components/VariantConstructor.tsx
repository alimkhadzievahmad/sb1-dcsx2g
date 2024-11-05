import React, { useState } from 'react';
import TopicCounter from './TopicCounter';
import SubTopic from './SubTopic';
import { X, ChevronRight, ChevronDown } from 'lucide-react';

interface SubTopicType {
  id: number;
  name: string;
  count: number;
  totalProblems: number;
}

interface Topic {
  id: number;
  name: string;
  count: number;
  expanded?: boolean;
  subTopics?: SubTopicType[];
}

const initialTopics: Topic[] = [
  {
    id: 1,
    name: "Планиметрия",
    count: 0,
    expanded: false,
    subTopics: [
      { id: 101, name: "Решение прямоугольного треугольника", count: 0, totalProblems: 49 },
      { id: 102, name: "Решение равнобедренного треугольника", count: 0, totalProblems: 48 },
      { id: 103, name: "Треугольники общего вида", count: 0, totalProblems: 29 },
      { id: 104, name: "Параллелограммы", count: 0, totalProblems: 35 },
      { id: 105, name: "Трапеция", count: 0, totalProblems: 27 }
    ]
  },
  {
    id: 2,
    name: "Векторы",
    count: 0,
    expanded: false,
    subTopics: [
      { id: 201, name: "Векторы и операции с ними", count: 0, totalProblems: 56 }
    ]
  },
  {
    id: 3,
    name: "Стереометрия",
    count: 0,
    expanded: false,
    subTopics: [
      { id: 301, name: "Куб", count: 0, totalProblems: 12 },
      { id: 302, name: "Прямоугольный параллелепипед", count: 0, totalProblems: 34 },
      { id: 303, name: "Элементы составных многогранников", count: 0, totalProblems: 15 },
      { id: 304, name: "Площадь поверхности составного многогранника", count: 0, totalProblems: 18 },
      { id: 305, name: "Объем составного многогранника", count: 0, totalProblems: 17 }
    ]
  }
];

export default function VariantConstructor() {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [shortAnswer, setShortAnswer] = useState(true);
  const [detailedAnswer, setDetailedAnswer] = useState(false);

  const toggleExpand = (topicId: number) => {
    setTopics(topics.map(topic =>
      topic.id === topicId ? { ...topic, expanded: !topic.expanded } : topic
    ));
  };

  const handleSubTopicIncrement = (topicId: number, subTopicId: number) => {
    setTopics(topics.map(topic =>
      topic.id === topicId
        ? {
            ...topic,
            subTopics: topic.subTopics?.map(subTopic =>
              subTopic.id === subTopicId
                ? { ...subTopic, count: subTopic.count + 1 }
                : subTopic
            )
          }
        : topic
    ));
  };

  const handleSubTopicDecrement = (topicId: number, subTopicId: number) => {
    setTopics(topics.map(topic =>
      topic.id === topicId
        ? {
            ...topic,
            subTopics: topic.subTopics?.map(subTopic =>
              subTopic.id === subTopicId
                ? { ...subTopic, count: Math.max(0, subTopic.count - 1) }
                : subTopic
            )
          }
        : topic
    ));
  };

  const clearAll = () => {
    setTopics(topics.map(topic => ({
      ...topic,
      count: 0,
      subTopics: topic.subTopics?.map(subTopic => ({ ...subTopic, count: 0 }))
    })));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">
          Конструктор варианта
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Выберите темы и количество заданий для тренировки
        </p>
      </div>

      <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
        {topics.map(topic => (
          <div key={topic.id}>
            <div 
              className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => toggleExpand(topic.id)}
            >
              <div className="flex items-center">
                {topic.expanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-400 mr-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                )}
                <span className="text-sm text-gray-900">{topic.name}</span>
              </div>
            </div>
            
            {topic.expanded && topic.subTopics?.map(subTopic => (
              <SubTopic
                key={subTopic.id}
                name={subTopic.name}
                count={subTopic.count}
                totalProblems={subTopic.totalProblems}
                onIncrement={() => handleSubTopicIncrement(topic.id, subTopic.id)}
                onDecrement={() => handleSubTopicDecrement(topic.id, subTopic.id)}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 rounded-b-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={shortAnswer}
                onChange={(e) => setShortAnswer(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6]"
              />
              <span className="text-sm text-gray-700">Краткий ответ</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={detailedAnswer}
                onChange={(e) => setDetailedAnswer(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6]"
              />
              <span className="text-sm text-gray-700">Развернутый ответ</span>
            </label>
          </div>
          <button
            onClick={clearAll}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
          >
            <X className="w-4 h-4 mr-1" />
            Убрать все
          </button>
        </div>

        <button className="w-full py-3 bg-[#3b82f6] text-white text-sm font-medium rounded-xl hover:bg-[#2563eb] transition-colors">
          Начать тренировку
        </button>
      </div>
    </div>
  );
}