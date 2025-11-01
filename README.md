# EchoTrack - Smart Energy Monitoring Dashboard

A modern, interactive energy monitoring dashboard built with React that provides real-time energy consumption tracking, AI-powered insights, and cost optimization recommendations.

## 🚀 Features

### 🏠 Welcome Page
- Modern landing page with animated background
- Call-to-action buttons for login/signup
- Feature highlights and benefits
- Responsive design

### 🔐 Authentication
- **Login Page**: Email/password authentication with forgot password option
- **Signup Page**: Complete registration with first name, last name, email, phone, and password
- Form validation and error handling
- Modern UI with glassmorphism effects

### 📊 Dashboard Pages

#### 1. **Overview Dashboard**
- Real-time power usage monitoring
- Energy consumption metrics
- Cost tracking and analysis
- Interactive charts and graphs
- AI-powered suggestions

#### 2. **Trend Analysis**
- Historical consumption patterns
- AI predictions vs actual usage
- Weekly and monthly trends
- Peak load hour analysis
- Anomaly detection

#### 3. **Alerts & Notifications**
- Active alerts management
- Device malfunction notifications
- Overconsumption warnings
- AI-generated suggestions
- Alert history tracking

#### 4. **Device-Wise Consumption**
- Individual device monitoring
- Usage distribution charts
- Device efficiency tracking
- AI predictions for device usage
- Optimization recommendations

#### 5. **Cost & Efficiency**
- Cost analysis (daily, weekly, monthly)
- Efficiency metrics and comparisons
- AI-powered cost optimization tips
- Energy saving suggestions
- Performance tracking

### 🤖 AI Chatbot
- Interactive AI assistant
- Energy optimization advice
- Real-time support
- Context-aware responses

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.8.0
- **Charts**: Recharts 2.5.0
- **Icons**: Lucide React 0.263.1
- **Styling**: CSS3 with modern features
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd energy-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Design Features

### Modern UI/UX
- **Dark Theme**: Sleek dark background with blue accents
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach
- **Interactive**: Hover states and micro-interactions

### Color Scheme
- **Primary**: #00d4ff (Cyan Blue)
- **Secondary**: #0099cc (Darker Blue)
- **Success**: #00ff88 (Green)
- **Warning**: #ffbd2e (Yellow)
- **Error**: #ff6b6b (Red)
- **Background**: #0a0a0a (Dark)

## 📊 Sample Data

The dashboard uses realistic sample data including:
- Real-time power consumption
- Historical energy usage patterns
- Device-wise consumption breakdown
- Cost analysis and predictions
- AI-generated insights and suggestions

## 🚀 Getting Started

1. **Welcome Page**: Start with the landing page
2. **Authentication**: Create an account or sign in
3. **Dashboard**: Explore the main dashboard
4. **Navigation**: Use the sidebar to access different sections
5. **AI Assistant**: Click the chatbot button for AI help

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🔧 Customization

### Adding New Charts
```javascript
import { LineChart, Line, XAxis, YAxis } from 'recharts';

<LineChart data={yourData}>
  <XAxis dataKey="time" />
  <YAxis />
  <Line type="monotone" dataKey="value" stroke="#00d4ff" />
</LineChart>
```

### Adding New Pages
1. Create component in `src/components/`
2. Add route in `src/App.js`
3. Update navigation in sidebar
4. Add corresponding CSS styles

## 🎯 Key Components

- **WelcomePage**: Landing page with animations
- **LoginPage/SignupPage**: Authentication forms
- **Dashboard**: Main overview dashboard
- **TrendAnalysis**: Historical data and predictions
- **AlertsPage**: Notifications and alerts
- **DeviceConsumption**: Device-wise monitoring
- **CostEfficiency**: Cost and efficiency tracking

## 📈 Future Enhancements

- Real-time data integration
- User authentication backend
- Database integration
- Advanced AI features
- Mobile app development
- API integrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎉 Demo

Visit the live demo to see EchoTrack in action:
- Modern, interactive interface
- Real-time data visualization
- AI-powered insights
- Mobile-responsive design

---

**EchoTrack** - Smart Energy Monitoring for a Sustainable Future ⚡
