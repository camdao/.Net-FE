import Icon, { type IconComponentMap } from '@/components/Icon';
import { css } from '@/styled-system/css';
import { cx } from '@/styled-system/css/cx';

interface NavItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  icon: keyof typeof IconComponentMap;
}

const NavItem = ({ icon, label, isActive, onClick }: NavItemProps) => {
  return (
    <div 
      onClick={onClick} 
      className={cx(navItemStyles, isActive && navItemActiveStyles)}
    >
      <Icon 
        color="black.40" 
        className={cx(iconStyles, isActive && IconActiveStyles)} 
        name={icon} 
      />
      <span className={labelStyles}>{label}</span>
      {isActive && <div className={activeBadge}></div>}
    </div>
  );
};

export default NavItem;

const navItemStyles = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '12px',
  padding: '12px 16px',
  borderRadius: '10px',
  cursor: 'pointer',
  color: 'black.60',
  transition: 'all 0.2s ease',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'blue.10',
    transform: 'translateX(4px)',
  },
});

const navItemActiveStyles = css({
  background: 'linear-gradient(90deg, #5570F1 0%, #7C8FEC 100%)',
  color: 'white',
  boxShadow: '0 4px 12px rgba(85, 112, 241, 0.2)',
  '&:hover': {
    transform: 'translateX(4px)',
  },
});

const IconActiveStyles = css({
  color: 'white',
});

const iconStyles = css({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
});

const labelStyles = css({
  textStyle: 'p2Medium',
  fontSize: '14px',
  whiteSpace: 'nowrap',
});

const activeBadge = css({
  position: 'absolute',
  right: '12px',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: 'white',
  boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
});
