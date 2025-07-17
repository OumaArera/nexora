import React from 'react';
import ProfessionalListCard from './ProfessionalListCard';
import ProfessionalGridCard from './ProfessionalGridCard';
import Pagination from '../../services/Pagination';
import { usePagination } from '../../hooks/usePagination';

// const ProfessionalCard = ({ professional, viewMode }) => {
//   if (viewMode === 'list') {
//     return <ProfessionalListCard professional={professional} />;
//   }
  
//   return <ProfessionalGridCard professional={professional} />;
// };

const ProfessionalCard = ({ professionals, viewMode }) => {
  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    goToPrevious,
    goToNext,
    hasNext,
    hasPrevious,
    startIndex,
    endIndex,
    totalItems
  } = usePagination(professionals, 9, 5);

  return (
    <div className="w-full">
      {/* Professional cards */}
      {viewMode === 'list' ? (
        <div className="space-y-4">
          {currentItems.map((professional, index) => (
            <ProfessionalListCard key={professional.id || index} professional={professional} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((professional, index) => (
            <ProfessionalGridCard key={professional.id || index} professional={professional} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
      />
    </div>
  );
};

export default ProfessionalCard;