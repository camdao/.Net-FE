'use client';
import { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon';
import { NAVIGATION } from '@/features/share/constants/navigation';
import { css } from '@/styled-system/css';

import NavItem from '../NavItem/NavItem';

interface Props {
  current: string;
  onClick?: (item: (typeof NAVIGATION)[number]) => void;
}

function SidebarView({ current, onClick }: Props) {
  return (
    <div className={containerCss}>
      {/* Logo Section */}
      <div className={logoSection}>
        <div className={logoCss}>
          <div className={logoIconWrapper}>
            <Image src="/logo.svg" height={40} width={40} alt="Logo" />
          </div>
          <div className={brandInfo}>
            <div className={brandName}>Metrix</div>
            <div className={brandTagline}>Office Supply</div>
          </div>
        </div>
      </div>

      {/* User Profile Card */}
      <div className={userCard}>
        <div className={userAvatar}>
          <span className={avatarText}>AD</span>
        </div>
        <div className={userInfo}>
          <div className={userName}>Admin User</div>
          <div className={userRole}>Administrator</div>
        </div>
        <div className={statusIndicator}></div>
      </div>

      {/* Navigation Section */}
      <div className={navSection}>
        <div className={sectionLabel}>MAIN MENU</div>
        <div className={menuItemsCss}>
          {NAVIGATION.map((item) => {
            const isActive = item.key === current;
            return (
              <NavItem
                key={item.key}
                icon={item.icon}
                label={item.name}
                isActive={isActive}
                onClick={() => onClick?.(item)}
              />
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <div className={logOutSection}>
        <div className={logOutCss}>
          <Icon name="Logout" />
          <div className={textLogoutCss}>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarView;

const containerCss = css({
  flexDirection: 'column',
  display: 'flex',
  height: '100vh',
  width: '280px',
  padding: '20px 16px',
  position: 'sticky',
  top: 0,
  left: 0,
  background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FD 100%)',
  borderRight: '1px solid',
  borderColor: 'black.10',
  overflowY: 'auto',
  overflowX: 'hidden',
  boxShadow: '2px 0 8px rgba(0, 0, 0, 0.02)',
  
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#ddd',
    borderRadius: '2px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#bbb',
  },
});

const logoSection = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '24px',
  paddingBottom: '20px',
  borderBottom: '1px solid',
  borderColor: 'black.10',
});

const logoCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

const logoIconWrapper = css({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #5570F1 0%, #7C8FEC 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(85, 112, 241, 0.2)',
});

const brandInfo = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const brandName = css({
  textStyle: 'sh3Bold',
  color: 'black.100',
  fontSize: '18px',
});

const brandTagline = css({
  textStyle: 'p2Regular',
  color: 'black.40',
  fontSize: '11px',
});

const collapseButton = css({
  display: 'none',
});

const collapseIcon = css({
  display: 'none',
});

const userCard = css({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px',
  borderRadius: '12px',
  backgroundColor: 'white',
  marginBottom: '24px',
  border: '1px solid',
  borderColor: 'black.10',
  position: 'relative',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
});

const userAvatar = css({
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  background: 'linear-gradient(135deg, #FFCC91 0%, #FFE5C8 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const avatarText = css({
  textStyle: 'p2Bold',
  color: 'white',
  fontSize: '14px',
});

const userInfo = css({
  flex: 1,
  minWidth: 0,
});

const userName = css({
  textStyle: 'p2Bold',
  color: 'black.100',
  fontSize: '14px',
  marginBottom: '2px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const userRole = css({
  textStyle: 'p2Regular',
  color: 'black.40',
  fontSize: '11px',
});

const statusIndicator = css({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: 'green.100',
  position: 'absolute',
  top: '14px',
  right: '14px',
  boxShadow: '0 0 0 2px white',
});

const navSection = css({
  flex: 1,
  marginBottom: '16px',
});

const sectionLabel = css({
  textStyle: 'p2Bold',
  color: 'black.40',
  fontSize: '11px',
  letterSpacing: '0.5px',
  marginBottom: '12px',
  paddingLeft: '12px',
});

const menuItemsCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const quickStats = css({
  display: 'none',
});

const statsCard = css({
  padding: '16px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #5570F1 0%, #7C8FEC 100%)',
  color: 'white',
  boxShadow: '0 4px 12px rgba(85, 112, 241, 0.2)',
});

const statsHeader = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '12px',
});

const statsIcon = css({
  fontSize: '16px',
});

const statsLabel = css({
  textStyle: 'p2Medium',
  fontSize: '12px',
  opacity: 0.9,
});

const statsValue = css({
  textStyle: 'sh2Bold',
  fontSize: '24px',
  marginBottom: '8px',
});

const statsChange = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

const statsUp = css({
  textStyle: 'p2Bold',
  fontSize: '12px',
  color: '#A8F5C5',
});

const statsCompare = css({
  textStyle: 'p2Regular',
  fontSize: '11px',
  opacity: 0.8,
});

const logOutSection = css({
  paddingTop: '16px',
  borderTop: '1px solid',
  borderColor: 'black.10',
});

const logOutCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '12px',
  padding: '12px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'red.10',
  },
});

const textLogoutCss = css({
  textStyle: 'p2Medium',
  color: 'red.100',
});
