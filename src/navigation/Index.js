import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ViewNotes from '../screens/ViewNotes'

const StackNavigator = createStackNavigator({
    ViewNotes: {
        screen: ViewNotes
    }
},
{
    initialRouteName: 'ViewNotes',
    headerMode: 'none'
}
)

export default createAppContainer(StackNavigator)