import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const History = () => {
  const log = useSelector((state) => state.calorie.log);

  const groupedEntries = log.reduce((acc, entry) => {
    const date = dayjs(entry.date).format('MMM DD, YYYY');
    acc[date] = acc[date] || [];
    acc[date].push(entry);
    return acc;
  }, {});

  return (
    <div className="p-4 max-w-4xl mx-auto sm:p-6 lg:p-8">
      <h2 className="text-lg text-white font-bold mb-4 text-center sm:text-left">History</h2>
      {Object.keys(groupedEntries).length === 0 ? (
        <p className="text-white text-center">No entries yet!</p>
      ) : (
        Object.entries(groupedEntries).map(([date, entries]) => (
          <div key={date} className="mb-6">
            <h3 className="font-bold text-blue-600 mb-2 text-center sm:text-left">{date}</h3>
            <ul className="space-y-2">
              {entries.map(({ id, food, calories }) => (
                <li
                  key={id}
                  className="border p-4 rounded bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center"
                >
                  <p className="font-semibold">
                    {food} - <span className="text-blue-600">{calories} cal</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
