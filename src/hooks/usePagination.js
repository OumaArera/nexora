import { useState, useEffect } from 'react';

export const usePagination = (items = [], itemsPerPageDesktop = 9, itemsPerPageMobile = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ensure items is always an array
  const safeItems = Array.isArray(items) ? items : [];
  
  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
  const totalPages = Math.ceil(safeItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = safeItems.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToPrevious = () => {
    goToPage(currentPage - 1);
  };

  const goToNext = () => {
    goToPage(currentPage + 1);
  };

  // Reset to page 1 when items change
  useEffect(() => {
    setCurrentPage(1);
  }, [safeItems.length]);

  return {
    currentItems,
    currentPage,
    totalPages,
    itemsPerPage,
    goToPage,
    goToPrevious,
    goToNext,
    hasNext: currentPage < totalPages,
    hasPrevious: currentPage > 1,
    startIndex: startIndex + 1,
    endIndex: Math.min(endIndex, safeItems.length),
    totalItems: safeItems.length
  };
};