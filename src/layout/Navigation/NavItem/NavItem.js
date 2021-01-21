import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function NavItem({
  pathname, selectedIcon, icon, name,
}) {
  const location = useLocation();

  return (
    <div className="nav-item mb-3">
      {
        (location.pathname === pathname)
          ? (
            <div>
              <img className="img-fluid" src={selectedIcon} alt={name} />
            </div>
          )
          : (
            <Link className="cursor-pointer" to={pathname}>
              <div className="h-100 row align-items-center">
                <img className="col-3 img-fluid nav-icon" src={icon} alt={name} />
                <h6 className="col font-weight-600 text-dark mb-0">{name}</h6>
              </div>
            </Link>
          )
      }
    </div>
  );
}
