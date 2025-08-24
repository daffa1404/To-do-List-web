function SearchProgressBar({ 
  searchQuery, 
  setSearchQuery, 
  currentFilter,
  completed,
  total,
  percentage 
}) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const getPlaceholder = () => {
    switch (currentFilter) {
      case "active":
        return "Search active tasks...";
      case "completed":
        return "Search completed tasks...";
      default:
        return "Search your task...";
    }
  };

  return (
    <div className="search-progress-container">
      {/* Search Bar */}
      <div className="search-wrapper">
        <div className="search-container" role="search">
          {/* Layered gradient frames */}
          <div className="search-glow" aria-hidden="true"></div>
          <div className="search-darkBorderBg" aria-hidden="true"></div>
          <div className="search-darkBorderBg" aria-hidden="true"></div>
          <div className="search-darkBorderBg" aria-hidden="true"></div>
          <div className="search-white" aria-hidden="true"></div>
          <div className="search-border" aria-hidden="true"></div>

          {/* Main search control */}
          <div className="search-main">
            <label htmlFor="search-input" className="visually-hidden">Search</label>
            <input
              id="search-input"
              placeholder={getPlaceholder()}
              type="text"
              name="search"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search tasks"
              autoComplete="off"
            />
            <div className="search-input-mask" aria-hidden="true"></div>
            <div className="search-pink-mask" aria-hidden="true"></div>

            <div className="search-filterBorder" aria-hidden="true"></div>

            {searchQuery && (
              <button 
                className="search-clear-icon" 
                type="button" 
                onClick={clearSearch}
                aria-label="Clear search"
                title="Clear search"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}

            <div className="search-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                height="20"
                fill="none"
                className="feather feather-search"
                aria-hidden="true"
              >
                <circle stroke="url(#search-gradient)" r="8" cy="11" cx="11"></circle>
                <line
                  stroke="url(#search-line-gradient)"
                  y2="16.65"
                  y1="22"
                  x2="16.65"
                  x1="22"
                ></line>
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search-gradient">
                    <stop stopColor="#f8e7f8" offset="0%"></stop>
                    <stop stopColor="#b6a9b7" offset="50%"></stop>
                  </linearGradient>
                  <linearGradient id="search-line-gradient">
                    <stop stopColor="#b6a9b7" offset="0%"></stop>
                    <stop stopColor="#837484" offset="50%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-wrapper">
        <div className="progress-container">
          <div className="progress-info">
            <span className="progress-text">Progress</span>
            <span className="progress-percentage">{percentage}%</span>
          </div>
          
          <div className="progress-bar-container">
            <div className="progress-bar-background">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${percentage}%` }}
              >
                <div className="progress-bar-shine"></div>
              </div>
            </div>
          </div>
          
          <div className="progress-stats">
            <span className="progress-stats-text">
              {completed} of {total} tasks completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProgressBar;