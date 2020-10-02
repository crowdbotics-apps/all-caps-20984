import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
