import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import { BiSolidLogOut } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

import './Sidebar.css';
import SidebarToggle from './SidebarToggle/SidebarToggle';
import { clsx } from 'clsx';
import MenuItem from 'components/MenuItem';

import React from 'react';
import useToggle from 'hooks/useToggle';

const MenuItemStyle = clsx('sidebar__menu-item');

export default function Sidebar() {
  const [isSidebarExpanded, handleClick] = useToggle(true);

  const menuConfigLogged = [
    {
      icon: <HiBookOpen />,
      name: 'University',
    },
    {
      icon: <HiAcademicCap />,
      name: 'Faculties',
    },
  ];

  const menuConfigNotLogged = [
    {
      name: 'Login',
    },
    {
      name: 'Register',
    },
  ];

  return (
    <aside
      className={clsx('sidebar', !isSidebarExpanded && 'sidebar--collapsed')}
    >
      <SidebarToggle handleClick={handleClick} isExpanded={isSidebarExpanded} />

      {isSidebarExpanded && (
        <>
          <div className="sidebar-brand"></div>
          <ul className="sidebar-menu">
            {menuConfigLogged.map((el, index) => {
              return <MenuItem key={index} item={el} isActive={index === 0} />;
            })}
            {false && (
              <>
                <li className={MenuItemStyle} style={{ marginTop: 'auto' }}>
                  {<FaUserCircle />}
                </li>
                <li className={MenuItemStyle}>{<BiSolidLogOut />}Log out</li>
              </>
            )}
          </ul>
        </>
      )}
    </aside>
  );
}

// ul > li > a - ok
// ul > a > li - not ok
