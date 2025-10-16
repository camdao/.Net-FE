import { css } from '@/styled-system/css';

import Sidebar from '../components/SideBar/SideBar';
import TopNav from '../components/TopNav/TopNav';

interface DashboardProps {
  children: React.ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  return (
    <div className={containerCss}>
      <Sidebar />
      <div className={mainContainer}>
        <TopNav />
        <div className={mainCss}>{children}</div>
      </div>
    </div>
  );
}

const containerCss = css({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden', // Prevent body scroll
  position: 'relative',
});

const mainContainer = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100vh',
  overflow: 'hidden', // Prevent overflow on main container
});

const mainCss = css({
  flex: 1,
  backgroundColor: 'white.50',
  overflowY: 'auto', // Enable vertical scroll for content only
  overflowX: 'hidden',
  height: '100%',
  
  // Custom scrollbar styling
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});
