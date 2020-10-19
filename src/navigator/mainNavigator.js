import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile151260Navigator from '../features/UserProfile151260/navigator';
import Tutorial151259Navigator from '../features/Tutorial151259/navigator';
import NotificationList151231Navigator from '../features/NotificationList151231/navigator';
import Settings151230Navigator from '../features/Settings151230/navigator';
import Settings151222Navigator from '../features/Settings151222/navigator';
import UserProfile151220Navigator from '../features/UserProfile151220/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile151260: { screen: UserProfile151260Navigator },
Tutorial151259: { screen: Tutorial151259Navigator },
NotificationList151231: { screen: NotificationList151231Navigator },
Settings151230: { screen: Settings151230Navigator },
Settings151222: { screen: Settings151222Navigator },
UserProfile151220: { screen: UserProfile151220Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
