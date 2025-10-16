'use client';
import { useState } from 'react';
import Dashboard from '@/features/LayoutAdmin/containers/DashboardContainers';
import { css } from '@/styled-system/css';

// Mock data
const salesData = [
  { month: 'Jan', sales: 45000, orders: 234 },
  { month: 'Feb', sales: 52000, orders: 267 },
  { month: 'Mar', sales: 48000, orders: 245 },
  { month: 'Apr', sales: 61000, orders: 312 },
  { month: 'May', sales: 55000, orders: 289 },
  { month: 'Jun', sales: 67000, orders: 345 },
];

const topProducts = [
  { id: 1, name: 'A4 Paper (500 sheets)', sold: 1234, revenue: '$12,340', trend: '+12%' },
  { id: 2, name: 'Blue Ballpoint Pens (Pack of 50)', sold: 987, revenue: '$9,870', trend: '+8%' },
  { id: 3, name: 'Sticky Notes (Assorted Colors)', sold: 856, revenue: '$8,560', trend: '+15%' },
  { id: 4, name: 'Stapler + Staples Bundle', sold: 743, revenue: '$7,430', trend: '+5%' },
  { id: 5, name: 'File Folders (Pack of 25)', sold: 621, revenue: '$6,210', trend: '+10%' },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'ABC Corp', items: 12, total: '$1,245', status: 'delivered', time: '2 hours ago' },
  { id: '#ORD-002', customer: 'XYZ Ltd', items: 8, total: '$890', status: 'processing', time: '3 hours ago' },
  { id: '#ORD-003', customer: 'Office Plus', items: 24, total: '$2,340', status: 'pending', time: '5 hours ago' },
  { id: '#ORD-004', customer: 'Tech Solutions', items: 15, total: '$1,560', status: 'delivered', time: '6 hours ago' },
  { id: '#ORD-005', customer: 'Global Supplies', items: 19, total: '$1,890', status: 'processing', time: '8 hours ago' },
];

export default function DashboardFeatures() {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <Dashboard>
      <div className={container}>
        {/* Header Section */}
        <div className={header}>
          <div>
            <h1 className={title}>Dashboard</h1>
            <p className={subtitle}>Welcome back! Here's what's happening with your store today.</p>
          </div>
          <div className={headerActions}>
            <select className={selectBox} value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            <button className={primaryButton}>
              <span className={buttonIcon}>📊</span>
              Generate Report
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className={statsGrid}>
          <div className={statsCard}>
            <div className={statsCardHeader}>
              <div>
                <p className={statsLabel}>Total Revenue</p>
                <h2 className={statsValue}>$67,890</h2>
              </div>
              <div className={statsIconWrapper} style={{ background: 'linear-gradient(135deg, #5570F1 0%, #7C8FEC 100%)' }}>
                <span className={statsIcon}>💰</span>
              </div>
            </div>
            <div className={statsFooter}>
              <span className={trendUp}>↗ 12.5%</span>
              <span className={statsCompare}>vs last month</span>
            </div>
          </div>

          <div className={statsCard}>
            <div className={statsCardHeader}>
              <div>
                <p className={statsLabel}>Total Orders</p>
                <h2 className={statsValue}>1,245</h2>
              </div>
              <div className={statsIconWrapper} style={{ background: 'linear-gradient(135deg, #32936F 0%, #519C66 100%)' }}>
                <span className={statsIcon}>📦</span>
              </div>
            </div>
            <div className={statsFooter}>
              <span className={trendUp}>↗ 8.3%</span>
              <span className={statsCompare}>vs last month</span>
            </div>
          </div>

          <div className={statsCard}>
            <div className={statsCardHeader}>
              <div>
                <p className={statsLabel}>New Customers</p>
                <h2 className={statsValue}>342</h2>
              </div>
              <div className={statsIconWrapper} style={{ background: 'linear-gradient(135deg, #FFCC91 0%, #FFE5C8 100%)' }}>
                <span className={statsIcon}>👥</span>
              </div>
            </div>
            <div className={statsFooter}>
              <span className={trendUp}>↗ 15.2%</span>
              <span className={statsCompare}>vs last month</span>
            </div>
          </div>

          <div className={statsCard}>
            <div className={statsCardHeader}>
              <div>
                <p className={statsLabel}>Avg. Order Value</p>
                <h2 className={statsValue}>$54.50</h2>
              </div>
              <div className={statsIconWrapper} style={{ background: 'linear-gradient(135deg, #F57E77 0%, #CC5F5F 100%)' }}>
                <span className={statsIcon}>💳</span>
              </div>
            </div>
            <div className={statsFooter}>
              <span className={trendDown}>↘ 2.1%</span>
              <span className={statsCompare}>vs last month</span>
            </div>
          </div>
        </div>

        {/* Charts and Lists Section */}
        <div className={contentGrid}>
          {/* Sales Chart */}
          <div className={chartCard}>
            <div className={cardHeader}>
              <h3 className={cardTitle}>Sales Overview</h3>
              <div className={chartLegend}>
                <span className={legendItem}>
                  <span className={legendDot} style={{ backgroundColor: '#5570F1' }}></span>
                  Revenue
                </span>
                <span className={legendItem}>
                  <span className={legendDot} style={{ backgroundColor: '#32936F' }}></span>
                  Orders
                </span>
              </div>
            </div>
            <div className={chartArea}>
              {/* Simple Bar Chart Visualization */}
              <div className={barChartContainer}>
                {salesData.map((item, index) => (
                  <div key={index} className={barChartGroup}>
                    <div className={barWrapper}>
                      <div 
                        className={bar} 
                        style={{ 
                          height: `${(item.sales / 67000) * 100}%`,
                          background: 'linear-gradient(180deg, #5570F1 0%, #7C8FEC 100%)'
                        }}
                      >
                        <span className={barTooltip}>${(item.sales / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                    <span className={barLabel}>{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className={listCard}>
            <div className={cardHeader}>
              <h3 className={cardTitle}>Top Selling Products</h3>
              <button className={linkButton}>View All →</button>
            </div>
            <div className={productList}>
              {topProducts.map((product, index) => (
                <div key={product.id} className={productItem}>
                  <div className={productRank}>#{index + 1}</div>
                  <div className={productInfo}>
                    <p className={productName}>{product.name}</p>
                    <p className={productStats}>
                      {product.sold} sold · {product.revenue}
                    </p>
                  </div>
                  <span className={productTrend}>{product.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className={ordersCard}>
          <div className={cardHeader}>
            <h3 className={cardTitle}>Recent Orders</h3>
            <button className={linkButton}>View All Orders →</button>
          </div>
          <div className={tableWrapper}>
            <table className={table}>
              <thead className={tableHead}>
                <tr>
                  <th className={tableHeader}>Order ID</th>
                  <th className={tableHeader}>Customer</th>
                  <th className={tableHeader}>Items</th>
                  <th className={tableHeader}>Total</th>
                  <th className={tableHeader}>Status</th>
                  <th className={tableHeader}>Time</th>
                </tr>
              </thead>
              <tbody className={tableBody}>
                {recentOrders.map((order) => (
                  <tr key={order.id} className={tableRow}>
                    <td className={tableCell}>
                      <span className={orderId}>{order.id}</span>
                    </td>
                    <td className={tableCell}>{order.customer}</td>
                    <td className={tableCell}>{order.items} items</td>
                    <td className={tableCell}>
                      <span className={orderTotal}>{order.total}</span>
                    </td>
                    <td className={tableCell}>
                      <span className={statusBadge(order.status)}>
                        {order.status}
                      </span>
                    </td>
                    <td className={tableCell}>
                      <span className={orderTime}>{order.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={quickActions}>
          <h3 className={sectionTitle}>Quick Actions</h3>
          <div className={actionsGrid}>
            <button className={actionCard}>
              <span className={actionIcon}>📝</span>
              <span className={actionLabel}>Create Order</span>
            </button>
            <button className={actionCard}>
              <span className={actionIcon}>📦</span>
              <span className={actionLabel}>Add Product</span>
            </button>
            <button className={actionCard}>
              <span className={actionIcon}>👤</span>
              <span className={actionLabel}>New Customer</span>
            </button>
            <button className={actionCard}>
              <span className={actionIcon}>📊</span>
              <span className={actionLabel}>View Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

// Styles
const container = css({
  padding: '32px',
  backgroundColor: 'white.50',
  minHeight: '100vh',
  '@media (max-width: 768px)': {
    padding: '16px',
  },
});

const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '32px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '16px',
  },
});

const title = css({
  textStyle: 'sh1Bold',
  color: 'black.100',
  marginBottom: '8px',
});

const subtitle = css({
  textStyle: 'p1Regular',
  color: 'black.40',
});

const headerActions = css({
  display: 'flex',
  gap: '12px',
  '@media (max-width: 768px)': {
    width: '100%',
  },
});

const selectBox = css({
  padding: '10px 16px',
  borderRadius: '8px',
  border: '1px solid',
  borderColor: 'black.10',
  backgroundColor: 'white',
  textStyle: 'p2Medium',
  color: 'black.80',
  cursor: 'pointer',
  outline: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: 'blue.100',
  },
  '&:focus': {
    borderColor: 'blue.100',
    boxShadow: '0 0 0 3px rgba(85, 112, 241, 0.1)',
  },
});

const primaryButton = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  borderRadius: '8px',
  backgroundColor: 'blue.100',
  color: 'white',
  textStyle: 'p2Medium',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'blue.90',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(85, 112, 241, 0.3)',
  },
});

const buttonIcon = css({
  fontSize: '16px',
});

const statsGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px',
  marginBottom: '32px',
});

const statsCard = css({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  },
});

const statsCardHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '16px',
});

const statsLabel = css({
  textStyle: 'p2Regular',
  color: 'black.40',
  marginBottom: '8px',
});

const statsValue = css({
  textStyle: 'sh1Bold',
  color: 'black.100',
});

const statsIconWrapper = css({
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const statsIcon = css({
  fontSize: '28px',
});

const statsFooter = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const trendUp = css({
  textStyle: 'p2Bold',
  color: 'green.100',
});

const trendDown = css({
  textStyle: 'p2Bold',
  color: 'red.100',
});

const statsCompare = css({
  textStyle: 'p2Regular',
  color: 'black.30',
});

const contentGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '24px',
  marginBottom: '32px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

const chartCard = css({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
});

const listCard = css({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
});

const cardHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
});

const cardTitle = css({
  textStyle: 'sh3Bold',
  color: 'black.100',
});

const linkButton = css({
  textStyle: 'p2Medium',
  color: 'blue.100',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: 'blue.80',
  },
});

const chartLegend = css({
  display: 'flex',
  gap: '16px',
});

const legendItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  textStyle: 'p2Regular',
  color: 'black.60',
});

const legendDot = css({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
});

const chartArea = css({
  height: '300px',
  display: 'flex',
  alignItems: 'flex-end',
});

const barChartContainer = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  padding: '20px 0',
  gap: '12px',
});

const barChartGroup = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

const barWrapper = css({
  width: '100%',
  height: '240px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

const bar = css({
  width: '100%',
  maxWidth: '48px',
  borderRadius: '8px 8px 0 0',
  position: 'relative',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
  '&:hover > span': {
    opacity: 1,
  },
});

const barTooltip = css({
  position: 'absolute',
  top: '-28px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'black.100',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  textStyle: 'p2Regular',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  opacity: 0,
  transition: 'opacity 0.2s ease',
});

const barLabel = css({
  textStyle: 'p2Regular',
  color: 'black.60',
  fontSize: '12px',
});

const productList = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const productItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px',
  borderRadius: '8px',
  transition: 'background 0.2s ease',
  '&:hover': {
    backgroundColor: 'blue.10',
  },
});

const productRank = css({
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  backgroundColor: 'blue.100',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textStyle: 'p2Bold',
  fontSize: '14px',
});

const productInfo = css({
  flex: 1,
});

const productName = css({
  textStyle: 'p2Medium',
  color: 'black.80',
  marginBottom: '4px',
});

const productStats = css({
  textStyle: 'p2Regular',
  color: 'black.40',
  fontSize: '13px',
});

const productTrend = css({
  textStyle: 'p2Bold',
  color: 'green.100',
  fontSize: '14px',
});

const ordersCard = css({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  marginBottom: '32px',
});

const tableWrapper = css({
  overflowX: 'auto',
});

const table = css({
  width: '100%',
  borderCollapse: 'collapse',
});

const tableHead = css({
  backgroundColor: 'white.50',
});

const tableHeader = css({
  textAlign: 'left',
  padding: '12px 16px',
  textStyle: 'p2Bold',
  color: 'black.60',
  fontSize: '13px',
  textTransform: 'uppercase',
});

const tableBody = css({});

const tableRow = css({
  borderBottom: '1px solid',
  borderColor: 'black.10',
  transition: 'background 0.2s ease',
  '&:hover': {
    backgroundColor: 'blue.10',
  },
});

const tableCell = css({
  padding: '16px',
  textStyle: 'p2Regular',
  color: 'black.80',
});

const orderId = css({
  textStyle: 'p2Bold',
  color: 'blue.100',
});

const orderTotal = css({
  textStyle: 'p2Bold',
  color: 'black.100',
});

const statusBadge = (status: string) => css({
  display: 'inline-block',
  padding: '4px 12px',
  borderRadius: '12px',
  textStyle: 'p2Medium',
  fontSize: '12px',
  textTransform: 'capitalize',
  backgroundColor: status === 'delivered' ? '#E8F5E9' : status === 'processing' ? '#FFF3E0' : '#F3E5F5',
  color: status === 'delivered' ? '#2E7D32' : status === 'processing' ? '#E65100' : '#6A1B9A',
});

const orderTime = css({
  textStyle: 'p2Regular',
  color: 'black.40',
  fontSize: '13px',
});

const quickActions = css({
  marginBottom: '32px',
});

const sectionTitle = css({
  textStyle: 'sh3Bold',
  color: 'black.100',
  marginBottom: '16px',
});

const actionsGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '16px',
});

const actionCard = css({
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  border: '2px dashed',
  borderColor: 'black.10',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: 'blue.100',
    backgroundColor: 'blue.10',
    transform: 'translateY(-2px)',
  },
});

const actionIcon = css({
  fontSize: '32px',
});

const actionLabel = css({
  textStyle: 'p2Medium',
  color: 'black.80',
});
