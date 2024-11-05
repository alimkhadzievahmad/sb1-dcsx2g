import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface TopicCounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function TopicCounter({ count, onIncrement, onDecrement }: TopicCounterProps) {
  return (
    <div className="flex items-center space-x-1.5">
      <button
        onClick={onDecrement}
        className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        disabled={count === 0}
      >
        <Minus className="w-4 h-4 text-gray-600" />
      </button>
      <span className="w-8 text-center text-sm font-medium text-gray-900">{count}</span>
      <button
        onClick={onIncrement}
        className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50"
      >
        <Plus className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}