import React, { useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import UserProfile from '../components/UserProfile';
import UserTransactionsList from '../components/UserTransactionsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceviveUserTransactions } from '../states/userTransactions/action';
import UserProductsList from '../components/UserProductsList';
import { asyncReceiveProducts } from '../states/products/action';

const MePage = () => {
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceviveUserTransactions({ userId: authUser?.id }));
    dispatch(asyncReceiveProducts());
  }, [dispatch, authUser]);

  if (!authUser) {
    return null;
  }

  return (
    <Tabs>
      <TabList>
        <Tab>User Profile</Tab>
        <Tab>User Transactions</Tab>
        <Tab>User Events</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <UserProfile />
        </TabPanel>
        <TabPanel>
          <UserTransactionsList />
        </TabPanel>
        <TabPanel>
          <UserProductsList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MePage;
