import { View, Text, RefreshControl } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import EventItem from "./event-item";


const Eventist = ({data}) => {
    const renderItem = ({item}) => {
        return (
            <EventItem item={item} />
        )
    }

    return (
        <View>
            <Text> EventList </Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log('refreshing...')}
                    />
                }
            />
        </View>
    )
}

export default Eventist;
