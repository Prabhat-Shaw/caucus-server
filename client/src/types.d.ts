import React from "react";

export interface UserInfoType {
  isLoggedIn: boolean;
  name?: string;
  image_link?: string;
  cookies?: string;
}

export interface OAUTH_TABLE {
  id: number;
  user_id: string;
  name: string;
  image_link: string;
  create_time: string;
  oauth_provider: string;
  access_token: string;
  refresh_token?: string;
}

export interface OauthResponse {
  isLoggedIn: boolean;
  message: string;
  user?: OAUTH_TABLE;
  cookies?: string;
}

export interface GuestNameContextTypes {
  guestName: string;
  guestLoginClick: boolean;
  handleGuestNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isGuestNameClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface SettingsContextType {
  language: string;
  fontSize: number;
  theme: string;
  handleLanguageChange: (value: string) => void;
  handleFontSizeChange: (value: number) => void;
  handleThemeChange: (value: string) => void;
}

export interface UserContextTypes {
  user: UserInfoType | undefined;
  saveUserInfo: (data: OauthResponse, isLoggedIn: boolean) => void;
  logoutUserInfo: () => void;
}
export interface StateInterface {
  appData: {
    guestName: string;
    AdminUser: UserInfoType;
    UserList: UserInfoType[];
    isLoggedIn: boolean;
  };
}

// SS -> short 😜
export interface UserInfoSS {
  name: string;
  image_link: string;
  roomID: string;
}

export interface LabelType {
  name: string;
  color: string;
  description?: string;
}

export interface QuestionListResponse {
  question_id: number;
  question_title: string;
  difficulty: string;
}

export interface QuestionDataSS {
  question_data: any;
  companies: string[];
  tags: string[];
}
export interface TabsContextTypes {
  tabIndex: number;
  questionData: QuestionDataSS;
  filterResponseData: (data: Record<string, any>, id: string) => void;
  onTabsChange: (value: number) => void;
  onQuestionDataChange: (value: QuestionDataSS) => void;
}
