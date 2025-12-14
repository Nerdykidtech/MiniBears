import { useState } from 'react';
import scheduleData from '../data/schedules.json';
import './Schedule.css';

const Schedule = () => {
  const [selectedProgram, setSelectedProgram] = useState('football');
  const [selectedGrade, setSelectedGrade] = useState('1st');

  const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

  const getSchedule = () => {
    return scheduleData[selectedProgram]?.[selectedGrade] || [];
  };

  const getScoreClass = (score) => {
    if (!score || score === '—') return '';
    if (score.includes('W')) return 'win';
    if (score.includes('L')) return 'loss';
    if (score.includes('T')) return 'tie';
    return '';
  };

  return (
    <div className="schedule-page">
      {/* Hero Section */}
      <section className="page-hero schedule-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="hero-icon">📅</span>
          <h1>Schedule & Scores</h1>
          <p>View game schedules and results by grade</p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="container">
          {/* Filters */}
          <div className="schedule-filters">
            <div className="filter-group">
              <label>Select Program:</label>
              <div className="program-toggle">
                <button 
                  className={`toggle-btn ${selectedProgram === 'football' ? 'active' : ''}`}
                  onClick={() => setSelectedProgram('football')}
                >
                  🏈 Football
                </button>
                <button 
                  className={`toggle-btn ${selectedProgram === 'cheer' ? 'active' : ''}`}
                  onClick={() => setSelectedProgram('cheer')}
                >
                  📣 Cheer
                </button>
              </div>
            </div>

            <div className="filter-group">
              <label>Select Grade:</label>
              <div className="grade-dropdown">
                <select 
                  value={selectedGrade} 
                  onChange={(e) => setSelectedGrade(e.target.value)}
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>
                      {grade} Grade
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Schedule Display */}
          <div className="schedule-display">
            <div className="schedule-header">
              <h2>
                {selectedProgram === 'football' ? '🏈' : '📣'} {selectedGrade} Grade {selectedProgram === 'football' ? 'Football' : 'Cheer'} Schedule
              </h2>
              <p className="season-info">2024 Fall Season</p>
            </div>

            <div className="schedule-table-wrapper">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>{selectedProgram === 'football' ? 'Opponent' : 'Event'}</th>
                    <th>Time</th>
                    <th>Location</th>
                    {selectedProgram === 'football' && <th>Score</th>}
                  </tr>
                </thead>
                <tbody>
                  {getSchedule().map((game, index) => (
                    <tr key={index}>
                      <td className="date-cell">{game.date}</td>
                      <td className="opponent-cell">
                        {selectedProgram === 'football' ? game.opponent : game.event}
                      </td>
                      <td className="time-cell">{game.time}</td>
                      <td className="location-cell">
                        <span className={`location-badge location-${game.location.toLowerCase()}`}>
                          {game.location}
                        </span>
                      </td>
                      {selectedProgram === 'football' && (
                        <td className={`score-cell ${getScoreClass(game.score)}`}>
                          {game.score}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            {selectedProgram === 'football' && (
              <div className="schedule-legend">
                <span className="legend-item">
                  <span className="legend-color win"></span> Win
                </span>
                <span className="legend-item">
                  <span className="legend-color loss"></span> Loss
                </span>
                <span className="legend-item">
                  <span className="legend-color tie"></span> Tie
                </span>
                <span className="legend-item">
                  <span className="legend-color pending"></span> Upcoming
                </span>
              </div>
            )}
          </div>

          {/* Quick Grade Navigation */}
          <div className="quick-nav">
            <h3>Quick Navigation</h3>
            <div className="grade-buttons">
              {grades.map(grade => (
                <button
                  key={grade}
                  className={`grade-btn ${selectedGrade === grade ? 'active' : ''}`}
                  onClick={() => setSelectedGrade(grade)}
                >
                  {grade} Grade
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="schedule-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>📍 Home Games</h3>
              <p>Gladewater Sports Complex</p>
              <p>123 Bear Drive, Gladewater, TX 75647</p>
            </div>
            <div className="info-card">
              <h3>⏰ Game Day Info</h3>
              <p>Please arrive 30 minutes before game time</p>
              <p>Concessions available at all home games</p>
            </div>
            <div className="info-card">
              <h3>🌧️ Weather Policy</h3>
              <p>Check our social media for weather updates</p>
              <p>Games may be rescheduled due to weather</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
