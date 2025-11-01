import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Settings,
  BarChart3,
  Lightbulb,
  TrendingUp,
  Bell,
  User,
  Save,
  Lock,
  Moon,
  Sun,
  MessageCircle
} from "lucide-react";
import "./Dashboard.css";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  const navigationItems = [
    { id: "overview", label: "Overview", icon: BarChart3, path: "/dashboard" },
    { id: "trend", label: "Trend Analysis", icon: TrendingUp, path: "/trend-analysis" },
    { id: "alerts", label: "Alerts", icon: Bell, path: "/alerts" },
    { id: "devices", label: "Devices", icon: Lightbulb, path: "/devices" },
    { id: "cost", label: "Cost & Efficiency", icon: TrendingUp, path: "/cost-efficiency" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
  ];

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <Zap className="logo-icon" />
            <span className="logo-text">EchoTrack</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navigationItems.map((item) => (
            <Link key={item.id} to={item.path} className={`nav-item ${item.id === "settings" ? "active" : ""}`}>
              <item.icon className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="chatbot-button" onClick={() => setShowChatbot(!showChatbot)}>
            <MessageCircle className="chatbot-icon" />
            Ask our AI Assistant
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="dashboard-title">Settings</h1>
            <p className="dashboard-subtitle">Manage your profile and preferences</p>
          </div>
        </header>
        <section className="settings-section">
          <div className="settings-card">
           <h2 className="section-heading">Profile Settings</h2>
           <div className="form-group">
            <label>Email</label>
            <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Enter your email"
             className="input-field"
            />
           </div>

           <div className="form-group">
            <label>New Password</label>
            <div className="password-field">
             <Lock className="input-icon" />
             <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="input-field"
             />
            </div>
           </div>
          </div>

          <div className="settings-card">
           <h2 className="section-heading">Preferences</h2>

           <div className="form-group toggle">
            <label>Dark Mode</label>
            <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
             {darkMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
           </div>

           <div className="form-group toggle">
            <label>Notifications</label>
            <button onClick={() => setNotifications(!notifications)} className="toggle-btn">
             {notifications ? "On" : "Off"}
            </button>
           </div>

           <button className="save-btn" onClick={handleSave}>
            <Save size={18} style={{ marginRight: "8px" }} /> Save Changes
           </button>
          </div>
        </section>

        
      </main>

      {/* AI Chatbot Overlay */}
      {showChatbot && (
        <div className="chatbot-overlay">
          <div className="chatbot-container">
            <div className="chatbot-header">
              <h3>AI Assistant</h3>
              <button className="chatbot-close" onClick={() => setShowChatbot(false)}>×</button>
            </div>
            <div className="chatbot-messages">
              <div className="message ai-message">
                <p>Hi! I can help you adjust your energy preferences or explain dashboard features.</p>
              </div>
            </div>
            <div className="chatbot-input">
              <input type="text" placeholder="Ask about your settings..." className="chatbot-input-field" />
              <button className="chatbot-send">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
