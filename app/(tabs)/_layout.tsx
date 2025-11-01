import { Tabs } from 'expo-router';
import { Image, ImageBackground } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import { Text } from 'react-native';
import TabIcon from '@/app/(tabs)/tabIcon';

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          height: 52,
          borderColor: '#0f0D23',
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          marginBottom: 36,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" image={images.highlight} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Profile"
              image={images.highlight}
              icon={icons.person}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title="Search"
              image={images.highlight}
              icon={icons.search}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Saved" image={images.highlight} icon={icons.save} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
