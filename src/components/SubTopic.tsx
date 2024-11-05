import React from 'react';
import TopicCounter from './TopicCounter';
import { ChevronRight } from 'lucide-react';

interface SubTopicProps {
  name: string;
  count: number;
  totalProblems: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function SubTopic({ name, count, totalProblems, onIncrement, onDecrement }: SubTopicProps) {
  return (
    <div className="flex items-center justify-between py-2 pl-8 pr-4 hover:bg-gray-50">
      <div className="flex items-center justify-between flex-1">
        <span className="text-sm text-gray-600">
          {name}
          <span className="text-xs text-gray-400 ml-2">
            {totalProblems} шт.
          </span>
        </span>
        <div className="flex items-center space-x-4">
          <TopicCounter
            count={count}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}