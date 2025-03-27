import { Tabs } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { icons } from '@/constants/icons';

type Props = {};

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className={`flex flex-col items-center flex-1`}>
    <View
      className={`h-8 w-8 flex items-center justify-center ${
        focused ? 'bg-[#8E97FD] rounded-lg' : ''
      }`}
    >
      <Image
        source={icon}
        className={`w-6 h-6`}
        resizeMode="contain"
        tintColor={focused ? 'white' : 'gray'}
      />
    </View>
    <Text
      className={`${
        focused ? 'text-[#8E97FD]' : 'text-gray-400'
      } text-[10px] text-nowrap w-full`}
    >
      {title}
    </Text>
  </View>
);

export default function TabsLayout({}: Props) {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#E5E7EB',
          borderTopWidth: 1,
          height: 65,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="sleep"
        options={{
          title: 'Sleep',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.sleep} title="Sleep" />
          ),
        }}
      />
      <Tabs.Screen
        name="meditate"
        options={{
          title: 'Meditate',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.meditate} title="Meditate" />
          ),
        }}
      />

      <Tabs.Screen
        name="music"
        options={{
          title: 'Music',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.music} title="Music" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
