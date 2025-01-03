"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface UserReviewCardProps {
  name: string;
  rating: number;
  review: string;
  avatarUrl: string;
}

const UserReviewCard: React.FC<UserReviewCardProps> = ({ name, rating, review, avatarUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <motion.img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Number(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.p
        className="text-gray-600 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {review}
      </motion.p>
    </motion.div>
  );
};

export default UserReviewCard;

