import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ViewNotes from '../screens/ViewNotes'
import AddNotes from '../screens/AddNotes'
import searchNotes from '../screens/searchBar'

const StackNavigator = createStackNavigator({
    ViewNotes: {
        screen: ViewNotes
    },
    AddNotes: {
        screen: AddNotes
    },
    searchNotes: {
        screen: searchNotes
    }
},
{
    initialRouteName: 'ViewNotes',
    headerMode: 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)