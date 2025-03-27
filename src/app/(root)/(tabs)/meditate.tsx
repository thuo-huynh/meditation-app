import { images } from '@/constants/images';
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const meditateTypes = [
  {
    id: '1',
    title: 'All',
    isActive: true,
    imageUrl: images.all,
  },
  {
    id: '2',
    title: 'My',
    isActive: false,
    imageUrl: images.my,
  },
  {
    id: '3',
    title: 'Anxious',
    isActive: false,
    imageUrl: images.anxious,
  },
  {
    id: '4',
    title: 'Sleep',
    isActive: false,
    imageUrl: images.sleep,
  },
  {
    id: '5',
    title: 'Kids',
    isActive: false,
    imageUrl: images.kids,
  },
];

const Meditate = () => {
  const [activeType, setActiveType] = useState('1');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-5 pb-20"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View>
          <Text className="text-[28px] font-bold text-neutral-800 text-center">
            Meditate
          </Text>
          <Text className="text-base text-neutral-500 mt-3 text-center px-5">
            we can learn how to recognize when our minds are doing their normal
            everyday acrobatics.
          </Text>
        </View>

        {/* Meditation Types */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-8 flex-row"
        >
          {meditateTypes.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="items-center mx-3"
              onPress={() => setActiveType(item.id)}
            >
              <View
                className={`w-16 h-16 rounded-full items-center justify-center ${
                  item.id === activeType ? 'bg-[#8E97FD]' : 'bg-[#A0A3B1]'
                }`}
              >
                <Image
                  source={item.imageUrl}
                  className="w-7 h-7"
                  resizeMode="contain"
                />
              </View>
              <Text
                className={`mt-2 text-sm font-medium ${
                  item.id === activeType ? 'text-neutral-800' : 'text-[#A0A3B1]'
                }`}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Daily Calm Card */}
        <View className="mt-6 bg-[#FFECCC] rounded-[15px] p-4 flex-row justify-between items-center h-[95px] overflow-hidden">
          <Image source={images.bgShape4} className="absolute top-0 left-0 " />
          <Image source={images.bgShape5} className="absolute top-0 right-0 " />
          <Image
            source={images.bgShape6}
            className="absolute bottom-0 right-32"
          />
          <View className="ml-2">
            <Text className="text-lg font-bold text-neutral-800">
              Daily Calm
            </Text>
            <Text className="text-xs text-neutral-600 mt-1">
              APR 30 • PAUSE PRACTICE
            </Text>
          </View>
          <TouchableOpacity className="bg-[#3F414E] rounded-full p-3 mr-2">
            <Image
              source={images.player}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor="white"
            />
          </TouchableOpacity>
        </View>

        {/* Meditation Cards Grid */}
        <View className="mt-6 flex-row flex-wrap justify-between">
          {/* First Column */}
          <View className="w-[48%] space-y-6 gap-4">
            <TouchableOpacity>
              <View className="rounded-xl overflow-hidden shadow-sm">
                <Image
                  source={images.bg1}
                  className="w-full h-72"
                  resizeMode="cover"
                />
                <Text className="absolute bottom-5 left-5 text-white font-bold text-lg">
                  7 Days of Calm
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="rounded-xl overflow-hidden shadow-sm h-52">
                <Image
                  source={images.bg2}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 justify-end pb-4 pl-4">
                  <Text className="text-white font-bold text-lg">
                    Morning Meditate
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Second Column */}
          <View className="w-[48%] space-y-6 gap-4">
            <TouchableOpacity>
              <View className="rounded-xl overflow-hidden shadow-sm h-52">
                <Image
                  source={images.bg2}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 justify-end pb-4 pl-4">
                  <Text className="text-white font-bold text-lg">
                    Anxiet Release
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="rounded-xl overflow-hidden shadow-sm h-72">
                <Image
                  source={images.bg1}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <Text className="absolute bottom-5 left-5 text-white font-bold text-lg">
                  Stress Removal
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Meditate;
