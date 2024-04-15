import React, { useRef, useCallback } from 'react';
import DropDownButton from 'devextreme-react/drop-down-button';
import { Template } from 'devextreme-react/core/template';
import { useAuth } from '../../contexts/auth';
import './UserPanel.scss';
<%=#isTypeScript%>import type { UserPanelProps } from '../../types';<%=/isTypeScript%>
import { UserMenuSection } from '../user-menu-section/UserMenuSection';

export default function UserPanel({ menuMode }<%=#isTypeScript%>: UserPanelProps<%=/isTypeScript%>) {
  const { user } = useAuth();

  const dropDownButtonAttributes = {
    class: 'user-button'
  };

  const buttonDropDownOptions = {
    width: 'auto'
  };

  const dropDownBtn = useRef<%=#isTypeScript%><DropDownButton><%=/isTypeScript%>(null);
  const onMenuItemClick = useCallback(() => {
    dropDownBtn.current<%=#isTypeScript%>?<%=/isTypeScript%>.instance.close();
  }, []);

  return (
    <div className={'user-panel'}>
      {menuMode === 'context' && (
        <DropDownButton stylingMode='text'
          ref={dropDownBtn}
          icon={user<%=#isTypeScript%>?<%=/isTypeScript%>.avatarUrl} 
          showArrowIcon={false}
          elementAttr={dropDownButtonAttributes}
          dropDownOptions={buttonDropDownOptions}
          dropDownContentTemplate='dropDownTemplate'
        >
          <Template name='dropDownTemplate'>
            <UserMenuSection onMenuItemClick={onMenuItemClick} />
          </Template>
        </DropDownButton>
      )}
      {menuMode === 'list' && (
        <UserMenuSection
          showAvatar
          className={'dx-toolbar-menu-action'}
        />
      )}
    </div>
  );
}
