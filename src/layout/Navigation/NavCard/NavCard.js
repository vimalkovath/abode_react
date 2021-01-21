import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function NavCard({
  pathname, selectedIcon, icon, name,
}) {
  const location = useLocation();

  return (
          <div className="nav-card">
            {
              (location.pathname.includes(pathname))
                ? (
                  <img className="img-fluid" src={selectedIcon} alt={name} />
                )
                : (
                  <Link className="cursor-pointer" to={pathname}>
                    <div className="pt-4 pl-3">
                      <img className="img-fluid" src={icon} alt={name} />
                      <h6 className="mt-4 text-dark font-weight-500">{name}</h6>
                    </div>
                  </Link>
                )
            }
          </div>
        );
}
