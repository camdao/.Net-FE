'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { css } from '@/styled-system/css';

// Google Icon Component
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Microsoft Icon Component
const MicrosoftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
    <rect x="13" y="1" width="9" height="9" fill="#7FBA00"/>
    <rect x="1" y="13" width="9" height="9" fill="#00A4EF"/>
    <rect x="13" y="13" width="9" height="9" fill="#FFB900"/>
  </svg>
);

export function LoginFeature() {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic here
    console.log('Login:', { username, password, rememberMe });
  };

  return (
    <main className={container}>
      {/* Left Side - Illustration */}
      <section className={illustrationSection}>
        <div className={illustrationContent}>
          <div className={brandSection}>
            <div className={logoWrapper}>
              <Image src="/logo.svg" height={64} width={64} alt="Logo" />
            </div>
            <h1 className={brandTitle}>Office Supply Store</h1>
            <p className={brandSubtitle}>Comprehensive office supply solutions for businesses</p>
          </div>
          
          <div className={illustrationWrapper}>
            <div className={decorativeCircle1}></div>
            <div className={decorativeCircle2}></div>
            <div className={decorativeCircle3}></div>
            
            {/* Icon illustrations */}
            <div className={iconGrid}>
              <div className={iconBox}>📋</div>
              <div className={iconBox}>✏️</div>
              <div className={iconBox}>📊</div>
              <div className={iconBox}>📌</div>
              <div className={iconBox}>📁</div>
              <div className={iconBox}>✂️</div>
            </div>
          </div>

          <div className={featuresSection}>
            <div className={featureItem}>
              <span className={featureIcon}>✓</span>
              <span className={featureText}>Over 5000+ quality products</span>
            </div>
            <div className={featureItem}>
              <span className={featureIcon}>✓</span>
              <span className={featureText}>Fast nationwide delivery</span>
            </div>
            <div className={featureItem}>
              <span className={featureIcon}>✓</span>
              <span className={featureText}>Dedicated 24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side - Login Form */}
      <section className={formSection}>
        <div className={formContainer}>
          <div className={formHeader}>
            <h2 className={welcomeTitle}>Welcome Back!</h2>
            <p className={welcomeSubtitle}>Login to continue managing your store</p>
          </div>

          <div className={formContent}>
            <div className={inputGroup}>
              <label className={labelText}>Email or Username</label>
              <Input 
                icon="message" 
                placeholder="Enter your email or username" 
                value={username}
                onChange={setUsername}
              />
            </div>

            <div className={inputGroup}>
              <label className={labelText}>Password</label>
              <Input 
                icon="lock" 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={setPassword}
              />
            </div>

            <div className={optionsRow}>
              <label className={checkboxLabel}>
                <input 
                  type="checkbox" 
                  className={checkbox}
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className={checkboxText}>Remember me</span>
              </label>
              <a href="#" className={forgotPassword}>Forgot password?</a>
            </div>

            <Button 
              className={loginButton} 
              size="large" 
              variant="primary"
              onClick={handleLogin}
            >
              Login
            </Button>

            <div className={divider}>
              <span className={dividerLine}></span>
              <span className={dividerText}>or</span>
              <span className={dividerLine}></span>
            </div>

            <div className={alternativeLogin}>
              <button className={socialButton}>
                <span className={socialIconWrapper}>
                  <GoogleIcon />
                </span>
                <span>Sign in with Google</span>
              </button>
              <button className={socialButton}>
                <span className={socialIconWrapper}>
                  <MicrosoftIcon />
                </span>
                <span>Sign in with Microsoft</span>
              </button>
            </div>

            <p className={signupPrompt}>
              Don't have an account? <a href="#" className={signupLink}>Sign up now</a>
            </p>
          </div>
        </div>

        <div className={footer}>
          <p className={footerText}>© 2025 Office Supply Store. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}

// Main Container - Split Layout
const container = css({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
  '@media (max-width: 968px)': {
    flexDirection: 'column',
  },
});

// Left Side - Illustration Section
const illustrationSection = css({
  flex: '1',
  background: 'linear-gradient(135deg, #5570F1 0%, #7C8FEC 100%)',
  padding: '60px 80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 968px)': {
    display: 'none',
  },
});

const illustrationContent = css({
  maxWidth: '560px',
  width: '100%',
  position: 'relative',
  zIndex: 2,
});

const brandSection = css({
  textAlign: 'center',
  marginBottom: '60px',
});

const logoWrapper = css({
  backgroundColor: 'white',
  borderRadius: '20px',
  width: '100px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
});

const brandTitle = css({
  textStyle: 'h3Bold',
  color: 'white',
  marginBottom: '12px',
});

const brandSubtitle = css({
  textStyle: 'p1Regular',
  color: 'rgba(255,255,255,0.9)',
});

const illustrationWrapper = css({
  position: 'relative',
  padding: '60px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const decorativeCircle1 = css({
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: 'pulse 3s ease-in-out infinite',
});

const decorativeCircle2 = css({
  position: 'absolute',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.05)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: 'pulse 3s ease-in-out infinite 1s',
});

const decorativeCircle3 = css({
  position: 'absolute',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.03)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: 'pulse 3s ease-in-out infinite 2s',
});

const iconGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  position: 'relative',
  zIndex: 1,
  maxWidth: '300px',
  margin: '0 auto',
});

const iconBox = css({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '24px',
  fontSize: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
});

const featuresSection = css({
  marginTop: '60px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const featureItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: 'white',
});

const featureIcon = css({
  backgroundColor: 'rgba(255,255,255,0.2)',
  borderRadius: '50%',
  width: '28px',
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
});

const featureText = css({
  textStyle: 'p1Regular',
  color: 'rgba(255,255,255,0.95)',
});

// Right Side - Form Section
const formSection = css({
  flex: '1',
  backgroundColor: 'white.50',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '40px',
  '@media (max-width: 768px)': {
    padding: '24px',
  },
});

const formContainer = css({
  maxWidth: '480px',
  width: '100%',
  margin: '0 auto',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const formHeader = css({
  textAlign: 'center',
  marginBottom: '48px',
});

const welcomeTitle = css({
  textStyle: 'sh1Bold',
  color: 'black.100',
  marginBottom: '12px',
});

const welcomeSubtitle = css({
  textStyle: 'p1Regular',
  color: 'black.40',
});

const formContent = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const inputGroup = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const labelText = css({
  textStyle: 'sh3Medium',
  color: 'black.80',
});

const optionsRow = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '4px',
  '@media (max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
  },
});

const checkboxLabel = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
});

const checkbox = css({
  width: '18px',
  height: '18px',
  cursor: 'pointer',
  accentColor: '#5570F1',
});

const checkboxText = css({
  textStyle: 'p2Regular',
  color: 'black.70',
  userSelect: 'none',
});

const forgotPassword = css({
  textStyle: 'p2Medium',
  color: 'blue.100',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: 'blue.80',
    textDecoration: 'underline',
  },
});

const loginButton = css({
  cursor: 'pointer',
  marginTop: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(85, 112, 241, 0.3)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
});

const divider = css({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  margin: '12px 0',
});

const dividerLine = css({
  flex: 1,
  height: '1px',
  backgroundColor: 'black.10',
});

const dividerText = css({
  textStyle: 'p2Regular',
  color: 'black.30',
});

const alternativeLogin = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const socialButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  padding: '14px 24px',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: 'black.10',
  backgroundColor: 'white',
  textStyle: 'p1Medium',
  color: 'black.80',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: 'blue.100',
    backgroundColor: 'blue.10',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
});

const socialIcon = css({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: 'blue.100',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '14px',
});

const socialIconWrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
});

const signupPrompt = css({
  textAlign: 'center',
  textStyle: 'p2Regular',
  color: 'black.60',
  marginTop: '12px',
});

const signupLink = css({
  textStyle: 'p2Bold',
  color: 'blue.100',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: 'blue.80',
    textDecoration: 'underline',
  },
});

const footer = css({
  marginTop: '40px',
  textAlign: 'center',
});

const footerText = css({
  textStyle: 'p2Regular',
  color: 'black.30',
});
