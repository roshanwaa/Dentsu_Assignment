import React from 'react';
import { WelcomePage } from './WelcomePage';

export const MainPage = () => {
  return (
    <>
      <div className="mainPageContainer">
        <div className="left_Container" />
        <div className="right_Container">
          <div className="content1"></div>
          <div className="content2"></div>
          <div className="WelcomePageContent">
            <WelcomePage />
          </div>
        </div>
      </div>
    </>
  );
};
