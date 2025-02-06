import React from "react";
import { View, Text, useColorScheme } from "react-native";
import { Card, Avatar, IconButton } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { UserCardProps } from "../model";
import appColors from "../../../utils/appColors";

const UserCard: React.FC<UserCardProps> = (props) => {
    const {
        user,
        isMatch = false,
    } = props

    const isDarkMode = useColorScheme() === 'dark';

    let backgroundColor = isDarkMode ? Colors.darker : Colors.lighter
    let textColor = isDarkMode ? Colors.lighter : Colors.darker

    return (
        <Card style={{
            margin: 10,
            borderRadius: 12,
            backgroundColor: isMatch ? appColors.primary : backgroundColor,
            elevation: 5
        }}>
            <Card.Title
                title={user.name}
                style={{ paddingRight: 16 }}
                subtitle={`Last Played: ${user.lastDayPlayed}`}
                left={(props: any) => <Avatar.Text {...props} label={user.name?.charAt(0)} />}
                right={(props: any) => (
                    // <IconButton
                    //     {...props}
                    //     icon={user.subscribed ? "star" : "star-outline"}
                    //     color={user.subscribed ? "#FFD700" : "#AAA"}
                    // />
                    <Avatar.Text {...props} label={user.rank} />
                )}
            />

            <Card.Content>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: textColor }}>{`🍌 Bananas: ${user.bananas}`}</Text>
                    <Text style={{ fontSize: 14, fontWeight: "600", color: textColor }}>{`🔥 Streak: ${user.longestStreak} days`}</Text>
                </View>
                <Text style={{ fontSize: 14, fontWeight: "600", color: textColor }}>{`⭐ Stars: ${user.stars}`}</Text>
            </Card.Content>
        </Card>
    );
};

export default UserCard;
