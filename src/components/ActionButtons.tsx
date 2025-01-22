import React from 'react';
import { ActionButtonsProps } from '../types';

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCallWaiter,
  onLeaveReview,
}) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={onCallWaiter}
        className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Call Waiter
      </button>
      <button
        onClick={onLeaveReview}
        className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Leave Review
      </button>
    </div>
  );
}; 