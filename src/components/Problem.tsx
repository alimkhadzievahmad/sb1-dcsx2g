import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Problem as ProblemType } from '../types/problem';

interface ProblemProps {
  problem: ProblemType;
}

export default function Problem({ problem }: ProblemProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const isCorrect = selectedAnswer === problem.correctAnswer;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto my-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Задача #{problem.id}
          </h3>
          <span className="text-sm text-gray-500">{problem.topicName}</span>
        </div>
        <p className="text-gray-700 whitespace-pre-wrap">{problem.question}</p>
      </div>

      <div className="space-y-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
              selectedAnswer === null
                ? 'hover:bg-blue-50 bg-gray-50'
                : selectedAnswer === index
                ? isCorrect
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
                : index === problem.correctAnswer && showExplanation
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <span className="mr-3">{String.fromCharCode(65 + index)}.</span>
              <span>{option}</span>
              {selectedAnswer === index && (
                <span className="ml-auto">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Объяснение:</h4>
          <p className="text-blue-700">{problem.explanation}</p>
        </div>
      )}
    </div>
  );
}