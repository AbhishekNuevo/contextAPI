import React, {useState} from 'react';

const UserInfoContext = React.createContext(undefined);
const PurchaseInfoContext = React.createContext(undefined);

export const UserInfoProvider = ({children}) => {
  const [value, setValue] = useState();
  return (
    <PurchaseInfoContext.Provider value={{}}>
      <UserInfoContext.Provider value={{value, setValue}}>
        {children}
      </UserInfoContext.Provider>
    </PurchaseInfoContext.Provider>
  );
};

export const consumeUserInfoContext = () => React.useContext(UserInfoContext);
export const consumePurchaseInfoContext = () =>
  React.useContext(PurchaseInfoContext);
