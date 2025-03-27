import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

type MeditationCardProps = {
  title: string;
  subtitle: string;
  duration: string;
  image: any;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
};

export default function MeditationCard({
  title,
  subtitle,
  duration,
  image,
  backgroundColor,
  textColor,
  buttonColor,
  buttonTextColor,
}: MeditationCardProps) {
  return (
    <View
      className={`relative h-[210px] rounded-xl ${backgroundColor} overflow-hidden`}
    >
      <View className="flex-1 p-5 justify-between">
        {/* Top Content */}
        <View>
          <Image
            source={image}
            className="absolute self-end"
            resizeMode="contain"
          />
          <View className="mt-2 relative top-20">
            <Text className={`text-xl font-bold ${textColor}`}>{title}</Text>
            <Text
              className={`mt-1 text-xs tracking-wider ${textColor} opacity-80`}
            >
              {subtitle}
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View className="flex-row justify-between items-center">
          <Text className={`text-xs ${textColor} opacity-80`}>{duration}</Text>
          <TouchableOpacity
            className={`rounded-full px-5 py-[10px] ${buttonColor}`}
          >
            <Text className={`text-xs font-semibold ${buttonTextColor}`}>
              START
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
