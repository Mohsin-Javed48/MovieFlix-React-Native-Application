import { Image, ImageBackground, Text, View, ImageSourcePropType } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

interface TabIconProps {
  focused?: boolean;
  title?: string;
  image?: ImageSourcePropType;
  icon: ImageSourcePropType;
}

const TabIcon = ({ focused, title, image, icon }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={image}
        className="flex flex-row w-full flex-1 min-w-[88px] min-h-16 mt-4 rounded-full overflow-hidden justify-center items-center"
      >
        <Image source={icon} tintColor="#151312" className="size-5 m-1" />
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full mt-4 rounded-full items-center justify-center ">
        <Image source={icon} tintColor="#A8B5DB" className="size-5 mb-2" />
      </View>
    );
  }
};

export default TabIcon;
