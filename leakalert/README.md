# 🚨 LeakAlert - Real-Time Pipeline Monitoring PWA

**LeakAlert** is a **Progressive Web App (PWA)** designed to monitor pipeline systems in real-time using IoT sensors. It features live data tracking, critical alerting, and offline support — all optimized with a clean, responsive UI built in React.

🔗 [View GitHub Repository](https://github.com/EMMANUEL08161823021/LeakAlert)

---

## 🧰 Technology Stack

### ✅ Framework
- **React.js** – For fast, component-based UI development.

### 🎨 Design Tools
- **Figma** – For responsive UI/UX prototyping and layout planning.

### 💻 Frontend Languages
- **HTML**, **CSS**, **JavaScript**
- **JSX** – For building reusable React components.

### 🔧 Libraries & Tools
- **React Router** – For SPA routing/navigation.
- **Axios** – For API requests.
- **Recharts** – For data visualization (charts and graphs).
- **Firebase Authentication** – For secure user login/signup.
- **Firebase Cloud Messaging (FCM)** – For real-time push notifications.
- **useEffect (React Hook)** – For periodic polling and real-time updates.

---

## 📄 Key Pages & Features

### 🔐 1. Login / Signup Page
- **Functionality**:
  - Integrated Firebase Authentication for secure signups, logins, and password resets.
- **UI/UX**:
  - Clean and responsive form components.
- **Actions**:
  - Handles real-time validation and Firebase feedback for success/failure.

---

### 📊 2. Dashboard / Home Page
- **Functionality**:
  - Displays live data from IoT sensors (flow rate, pressure, pipeline status).
  - Triggers alerts via email when anomalies (like leaks) are detected.
- **UI/UX**:
  - Real-time charts via Recharts.
  - Color-coded status indicators (e.g., red for critical alerts).
- **Actions**:
  - Retrieves sensor data using Axios from `/api/sensor-data`.
  - Uses `useEffect` to handle live updates at intervals.

---

### 📈 3. Incident Logging & Analytics Page
- **Functionality**:
  - Shows history of incidents and visual trend analytics.
- **UI/UX**:
  - Interactive bar/line graphs using Recharts.
  - Date range filters for custom views.
- **Actions**:
  - Fetches data from `/api/logs` and `/api/reports/daily`.

---

## ⚙️ PWA-Specific Features

### 🧩 Service Worker
- Provides **offline access** by caching critical assets.
- Sends **real-time push notifications** via Firebase Cloud Messaging.

### 📱 Responsive Design
- Mobile-first approach using CSS media queries and flexible grid layouts in React.

---

## 🔗 Core Front-End Integrations

### 1. Backend API Integration
- RESTful API communication using Axios.
- Real-time sensor updates, incident logs, and alerts.

### 2. Real-Time Data Display
- React’s `useEffect` used for polling live sensor data and updating components without reloading the page.

---

## 🧠 Challenges & Solutions

### ⚡ Real-Time Data Performance
- **Challenge**: UI lag from high-frequency data.
- **Solution**: Optimized state management and rendering using React's virtual DOM and selective updates.

### 🌐 Cross-Browser Compatibility
- **Challenge**: Inconsistent behavior on different browsers.
- **Solution**: Extensive browser testing and use of modern CSS/JS standards.

### 📴 Offline Functionality
- **Challenge**: App reliability during network failures.
- **Solution**: Used service workers to cache content and provide fallback data for offline use.

---

## 📬 Contact

**Emmanuel Oguntolu**  
📧 emmanueloguntolu48@gmail.com  
🌍 [Portfolio Website](https://emmanuel08161823021.github.io/)  
📞 +234 708 265 9880


