import React, { useMemo, useCallback } from 'react';
import { useAuth } from '../../contexts/auth';
import List, { ListTypes } from 'devextreme-react/list';
import { useNavigate } from "react-router-dom";

import './UserMenuSection.scss';
<%=#isTypeScript%>import type { UserMenuSectionProps } from '../../types';<%=/isTypeScript%>

type MenuItem = {
  text<%=#isTypeScript%>: string<%=/isTypeScript%>;
  icon<%=#isTypeScript%>: string<%=/isTypeScript%>;
  onClick: () => void;
};

export const UserMenuSection = ({ showAvatar, className, onMenuItemClick }<%=#isTypeScript%>: UserMenuSectionProps<%=/isTypeScript%>) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navigateToProfile = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const menuItems = useMemo(
    () => [
      {
        text: "Profile",
        icon: "user",
        onClick: navigateToProfile
      },
      {
        text: 'Logout',
        icon: 'runner',
        onClick: signOut,
      },
    ],
    [signOut, navigateToProfile]
  );

  const onItemClick = useCallback(({ itemData }<%=#isTypeScript%>: ListTypes.ItemClickEvent<MenuItem><%=/isTypeScript%>) => {
    itemData<%=#isTypeScript%>?<%=/isTypeScript%>.onClick();
    onMenuItemClick<%=#isTypeScript%>?<%=/isTypeScript%>.();
  }, [onMenuItemClick]);

  return (
    <div className={className}>
      <div className='user-info'>
        { showAvatar && (
          <div className='image-container'>
            <div
              style={{
                backgroundImage: `url(${user<%=#isTypeScript%>?<%=/isTypeScript%>.avatarUrl})`,
              }}
              className='user-image'
            />
          </div>
        )}
        <div className='user-email'>{user<%=#isTypeScript%>?<%=/isTypeScript%>.email}</div>
      </div>
      <List onItemClick={onItemClick} items={menuItems} />
    </div>
  );
};