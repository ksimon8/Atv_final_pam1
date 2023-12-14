import { StyleSheet, Text, View } from "react-native";

import MyDrawer from '../src/components/MyDrawer'

export default function DrawerMenu() {
    return (
        <MyDrawer />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});