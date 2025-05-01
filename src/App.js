import React, { useState } from 'react';
import './App.css';

function App() {
  const semesterData = {
    1: [
      { code: 'UNR1403', name: 'Academic English', hours: 2.0, mark: '', grade: '--' },
      { code: 'UNR1302', name: 'Fundamentals of Business', hours: 2.0, mark: '', grade: '--' },
      { code: 'EBA1203', name: 'Calculus I', hours: 3.0, mark: '', grade: '--' },
      { code: 'EBA1300', name: 'Biochemistry', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS1101', name: 'Introduction to Computing', hours: 3.0, mark: '', grade: '--' },
      { code: 'CIS1000', name: 'Introduction to Information Systems', hours: 3.0, mark: '', grade: '--' },
      { code: 'UNR1102', name: 'Creativity & Innovation', hours: 2.0, mark: '', grade: '--' }
    ],
    2: [
      { code: 'CCS1001', name: 'Discrete Structures', hours: 3.0, mark: '', grade: '--' },
      { code: 'MTH1102', name: 'Calculus II', hours: 3.0, mark: '', grade: '--' },
      { code: 'UNR1407', name: 'Academic Writing', hours: 2.0, mark: '', grade: '--' },
      { code: 'EBA1110', name: 'Physics I', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS1302', name: 'Problem Solving And Programming', hours: 3.0, mark: '', grade: '--' },
      { code: 'UNR2101', name: 'Communication And Presentation Skills', hours: 2.0, mark: '', grade: '--' },
      { code: 'CNC1401', name: 'Entrepreneurship Skills', hours: 2.0, mark: '', grade: '--' }
    ],
    3: [
      { code: 'CCS2102', name: 'Digital Logic Design', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS2303', name: 'Object-Oriented Programming', hours: 3.0, mark: '', grade: '--' },
      { code: 'EBA2204', name: 'Linear Algebra', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS2201', name: 'Introduction to Networks', hours: 3.0, mark: '', grade: '--' },
      { code: 'CIS2101', name: 'Database Systems', hours: 3.0, mark: '', grade: '--' },
      { code: 'EBA2203', name: 'Probability & Statistics', hours: 3.0, mark: '', grade: '--' }
    ],
    4: [
      { code: 'CCS2401', name: 'Data Structures and Algorithms', hours: 3.0, mark: '', grade: '--' },
      { code: 'CSE2001', name: 'Introduction to Software Engineering', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS2304', name: 'Advanced Programming Applications', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS2305', name: 'Web Programming', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS2103', name: 'Introduction to Computer Architecture', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCY2001', name: 'Introduction to Cybersecurity', hours: 3.0, mark: '', grade: '--' }
    ],
    5: [
      { code: 'CAI3101', name: 'Introduction to Artificial Intelligence', hours: 3.0, mark: '', grade: '--' },
      { code: 'EBA3202', name: 'Differential Equations', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS3402', name: 'Theory of Computation', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS3202', name: 'Systems Programming', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS3203', name: 'Operating Systems', hours: 3.0, mark: '', grade: '--' },
      { code: 'CIT3200', name: 'Professional Training in Mobile Apps Programming', hours: 0.0, mark: '', grade: '--' }
    ],
    6: [
      { code: 'EBA3201', name: 'Advanced Statistics', hours: 3.0, mark: '', grade: '--' },
      { code: 'CIT3101', name: 'Professional Training in Soft. Test. I', hours: 0.0, mark: '', grade: '--' },
      { code: 'CCS3501', name: 'Computer Graphics', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS3403', name: 'Computing Algorithms', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS3002', name: 'Numerical Methods', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS3003', name: 'System Modeling and Simulation', hours: 3.0, mark: '', grade: '--' }
    ],
    7: [
      { code: 'CCS4901', name: 'Project I', hours: 3.0, mark: '', grade: '--' },
      { code: 'CITXXXX_2', name: 'Professional Training II', hours: 0.0, mark: '', grade: '--' },
      { code: 'CCS4306', name: 'Structure of Programming Languages', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS4903', name: 'Computing and Society', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCSXXXX_1', name: 'CS Major Elective', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCSXXXX_2', name: 'CS Major Elective', hours: 3.0, mark: '', grade: '--' }
    ],
    8: [
      { code: 'CCS4902', name: 'Project II', hours: 3.0, mark: '', grade: '--' },
      { code: 'CITXXXX_3', name: 'Professional Training III', hours: 0.0, mark: '', grade: '--' },
      { code: 'CCS4204', name: 'Computer System Security', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCS4502', name: 'Human Computer Interaction', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCSXXXX_3', name: 'CS Major Elective', hours: 3.0, mark: '', grade: '--' },
      { code: 'CCSXXXX_4', name: 'CS Major Elective', hours: 3.0, mark: '', grade: '--' }
    ]
  };

  const [department, setDepartment] = useState('Computer Science');
  const [currentSemester, setCurrentSemester] = useState(1);
  const [allSemesterData, setAllSemesterData] = useState(() => {
    const initialData = {};
    for (let sem = 1; sem <= 8; sem++) {
      initialData[sem] = semesterData[sem].map(subject => ({...subject}));
    }
    return initialData;
  });

  const calculateGrade = (mark) => {
    if (mark >= 96) return 'A+';
    if (mark >= 92) return 'A';
    if (mark >= 88) return 'A-';
    if (mark >= 84) return 'B+';
    if (mark >= 80) return 'B';
    if (mark >= 76) return 'B-';
    if (mark >= 72) return 'C+';
    if (mark >= 68) return 'C';
    if (mark >= 64) return 'C-';
    if (mark >= 60) return 'D+';
    if (mark >= 55) return 'D';
    if (mark >= 50) return 'D-';
    return 'F';
  };

  const getGradePoints = (grade) => {
    const points = {
      'A+': 4.0, 'A': 3.7, 'A-': 3.4,
      'B+': 3.2, 'B': 3.0, 'B-': 2.8,
      'C+': 2.6, 'C': 2.4, 'C-': 2.2,
      'D+': 2.0, 'D': 1.5, 'D-': 1.0,
      'F': 0.0
    };
    return points[grade] || 0;
  };

  const handleMarkChange = (index, value) => {
    const newValue = value === '' ? '' : Math.min(100, Math.max(0, Number(value)));
    const updatedSemesterData = {...allSemesterData};
    updatedSemesterData[currentSemester] = allSemesterData[currentSemester].map((subject, i) => {
      if (i === index) {
        return {
          ...subject,
          mark: newValue,
          grade: newValue === '' ? '--' : calculateGrade(newValue)
        };
      }
      return subject;
    });
    setAllSemesterData(updatedSemesterData);
  };

  const handleSemesterChange = (semester) => {
    setCurrentSemester(semester);
  };

  const calculateStats = () => {
    let totalHours = 0;
    let totalPoints = 0;
    
    Object.values(allSemesterData).forEach(semesterSubjects => {
      semesterSubjects.forEach(subject => {
        if (subject.mark !== '' && subject.hours > 0) {
          totalHours += subject.hours;
          totalPoints += subject.hours * getGradePoints(subject.grade);
        }
      });
    });
    
    const gpa = totalPoints / totalHours;
    
    return {
      totalHours,
      totalPoints,
      gpa: isNaN(gpa) ? '--' : gpa.toFixed(2)
    };
  };

  const handleReset = () => {
    const resetData = {...allSemesterData};
    resetData[currentSemester] = resetData[currentSemester].map(subject => ({
      ...subject,
      mark: '',
      grade: '--'
    }));
    setAllSemesterData(resetData);
  };

  const subjects = allSemesterData[currentSemester];
  const stats = calculateStats();

  return (
    <div className="app-container">
      <header className="header">
        <h1>GPA Calculator</h1>
        <p>Track and calculate your academic performance</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Credit Hours</div>
          <div className="stat-value">{stats.totalHours.toFixed(1)}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Cumulative GPA</div>
          <div className="stat-value">{stats.gpa}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Points</div>
          <div className="stat-value">{stats.totalPoints.toFixed(1)}</div>
        </div>
      </div>

      <section className="department-section">
        <h2>Department Selection</h2>
        <p className="text-app-gray">Select your department to see specific courses for semesters 5-8.</p>
        <div className="department-options">
          {['Computer Science'].map(dept => (
            <label key={dept} className="radio-label">
              <input
                type="radio"
                checked={department === dept}
                onChange={() => setDepartment(dept)}
              />
              <span>{dept}</span>
            </label>
          ))}
        </div>
      </section>

      <div className="semester-tabs">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
          <button
            key={sem}
            onClick={() => handleSemesterChange(sem)}
            className={`semester-tab ${currentSemester === sem ? 'active' : ''}`}
          >
            Semester {sem}
          </button>
        ))}
      </div>

      <div className="courses-container">
        <h3 className="text-xl font-semibold mb-6">Semester {currentSemester} Courses</h3>
        <table className="courses-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Credits</th>
              <th>Mark</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.code}</td>
                <td>{subject.name}</td>
                <td>{subject.hours.toFixed(1)}</td>
                <td>
                  <input
                    type="number"
                    value={subject.mark}
                    onChange={(e) => handleMarkChange(index, e.target.value)}
                    min="0"
                    max="100"
                    placeholder="Mark"
                    className="mark-input"
                  />
                </td>
                <td>{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="action-buttons">
        <button onClick={calculateStats} className="btn btn-primary">
          Calculate GPA
        </button>
        <button onClick={handleReset} className="btn btn-secondary">
          Reset
        </button>
      </div>

      <footer className="footer">
        <p>Created by Ziad Ahmed</p>
      </footer>
    </div>
  );
}

export default App;
