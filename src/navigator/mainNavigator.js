import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile122523Navigator from '../features/UserProfile122523/navigator';
import Tutorial122522Navigator from '../features/Tutorial122522/navigator';
import NotificationList122494Navigator from '../features/NotificationList122494/navigator';
import Settings122493Navigator from '../features/Settings122493/navigator';
import Settings122485Navigator from '../features/Settings122485/navigator';
import UserProfile122483Navigator from '../features/UserProfile122483/navigator';
import ArticleList122445Navigator from '../features/ArticleList122445/navigator';
import ArticleList122444Navigator from '../features/ArticleList122444/navigator';
import ArticleList122443Navigator from '../features/ArticleList122443/navigator';
import ArticleList122426Navigator from '../features/ArticleList122426/navigator';
import ArticleList122425Navigator from '../features/ArticleList122425/navigator';
import ArticleList122424Navigator from '../features/ArticleList122424/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile122523: { screen: UserProfile122523Navigator },
Tutorial122522: { screen: Tutorial122522Navigator },
NotificationList122494: { screen: NotificationList122494Navigator },
Settings122493: { screen: Settings122493Navigator },
Settings122485: { screen: Settings122485Navigator },
UserProfile122483: { screen: UserProfile122483Navigator },
ArticleList122445: { screen: ArticleList122445Navigator },
ArticleList122444: { screen: ArticleList122444Navigator },
ArticleList122443: { screen: ArticleList122443Navigator },
ArticleList122426: { screen: ArticleList122426Navigator },
ArticleList122425: { screen: ArticleList122425Navigator },
ArticleList122424: { screen: ArticleList122424Navigator },

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
