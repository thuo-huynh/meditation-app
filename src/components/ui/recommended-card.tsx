import { View, Text, Image } from 'react-native';
import React from 'react';

type RecommendedCardProps = {
  title: string;
  subtitle: string;
  image: any;
  backgroundColor: string;
};

export default function RecommendedCard({
  title,
  subtitle,
  image,
  backgroundColor,
}: RecommendedCardProps) {
  return (
    <View className="w-[162px] mr-4">
      <View className={`rounded-[10px] p-4 ${backgroundColor}`}>
        <Image source={image} className="w-32 h-32" resizeMode="contain" />
      </View>
      <View className="mt-3">
        <Text className="text-lg font-bold text-neutral-800">{title}</Text>
        <Text className="text-xs text-neutral-500 mt-1 opacity-80">
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
