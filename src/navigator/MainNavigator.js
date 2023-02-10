import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import MovieListScreen from "../screen/MovieListScreen/MovieListScreen";
import MovieDetailScreen from '../screen/MovieDetailScreen/MovieDetailScreen'
import MovieSeasonScreen from '../screen/MovieSeasonScreen/MovieSeasonScreen'
import TVDetailScreen from '../screen/TVDetailScreen/TVDetailScreen'
import WebViewScreen from '../screen/WebViewScreen/WebViewScreen'
import SearchScreen from '../screen/SearchScreen/SearchScreen'
import FullScreenImage from "../screen/FullScreenImage/FullScreenImage";

import HomeDrawerNavigator from './HomeDrawerNavigator'
import ActorDetailScreen from "../screen/ActorDetailScreen.js/ActorDetailScreen";


const Stack = createStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitle: false,
                headerTransperant: true,
                headerBackTitleVisible: false,
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='MovieDetail' component={MovieDetailScreen} />
            <Stack.Screen name="TVDetail" component={TVDetailScreen} />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    gestureDirection: 'vertical'
                }}
            />
            <Stack.Screen name="Webview" component={WebViewScreen} />
            <Stack.Screen name="Movielist" component={MovieListScreen} />
            <Stack.Screen name="Movieseason" component={MovieSeasonScreen} />
            <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
            <Stack.Screen name="ActorDetail" component={ActorDetailScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator