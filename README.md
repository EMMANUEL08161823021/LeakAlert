How I Built the LeakAlert PWA
The LeakAlert PWA is a Progressive Web App designed to provide real-time monitoring and alerts for pipeline systems using IOT sensors. Here's a detailed breakdown of how I developed it using React.

Technology Stack
1.	Framework:
I used React to develop the app for its component-based architecture and ability to build fast, dynamic, and scalable web applications.
2.	Design Tools:
Designed the UI/UX in Figma, focusing on user-friendly layouts and responsiveness.
3.	Frontend Languages:
Core development utilized HTML, CSS, and JavaScript, along with React JSX for building reusable components.
4.	Libraries and Tools:
o	React Router for navigation.
o	Axios for making API calls.
o	Recharts for visualizing sensor data and analytics.
o	CSS for styling.
o	UseEffect for real-time updates via time intervals.

Key Pages and Features
1. Login/Signup Page
•	Functionality:
Integrated Firebase Authentication for secure user signups, logins, and password resets.
•	UI/UX:
Minimalistic forms styled with CSS and responsive design principles.
•	Actions:
Connected the form to Firebase, handling authentication requests and providing feedback on success or failure.

2. Dashboard/Home Page
•	Functionality:
Displays real-time data from IOT sensors, such as flow rates, pressure, and pipeline status, using UseEffect for real-time updates.
Alerts are sent via email prominently when anomalies (like leaks) are detected.
•	UI/UX:
o	Dynamic graphs and indicators created with Recharts.
o	Alerts are color-coded, with critical issues in red for better visibility.
•	Actions:
Used Axios to retrieve initial data from the backend (/api/sensor-data) and React useEffect for live updates.

3. Incident Logging and Analytics Page
•	Functionality:
Displays a history of pipeline incidents and basic analytics, including graphs for trends like leak frequency and response times.
•	UI/UX:
o	Used Recharts for visualizations (bar and line graphs).
o	Provided date range filters for tailored views.
•	Actions:
Fetched data from backend endpoints (/api/logs, /api/reports/daily) and dynamically updated the charts based on user selections.

PWA-Specific Features
1. Service Worker Setup
•	Enabled offline functionality using a custom service worker script.
•	Implemented push notifications with Firebase Cloud Messaging (FCM) to notify users of critical leaks.
2. Responsive Design
•	Ensured responsiveness using CSS , alongside React’s media queries for custom behavior.

Key Front-End Tasks
1.	Backend API Integration:
Connected React components to backend RESTful APIs for retrieving sensor data, alerts, and logs. Used Axios for HTTP requests and React’s useEffect for real-time updates.
2.	Real-Time Data Display:
Used React useEffect to stream live sensor data to the dashboard and update charts in real-time without page reloads.

Challenges and Solutions
1.	Real-Time Data Efficiency:
o	Challenge: Handling large, fast-updating datasets without UI lag.
o	Solution: Used React’s efficient reconciliation algorithm and optimized state updates to render only necessary changes.
2.	Cross-Browser Compatibility:
o	Challenge: Ensuring consistent behavior across different browsers.
o	Solution: Thorough testing and usage of modern web standards to address discrepancies.
3.	Offline Functionality:
o	Challenge: Ensuring the PWA worked seamlessly during network disruptions.
o	Solution: Used a service worker to cache critical assets and fallback data for offline use.
