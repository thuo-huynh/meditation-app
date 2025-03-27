import MeditationCard from '@/components/ui/meditation-card';
import RecommendedCard from '@/components/ui/recommended-card';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pb-20">
          {/* Logo */}
          <Image
            source={images.logo}
            className="self-center"
            resizeMode="contain"
          />

          {/* Header */}
          <View className="mt-6">
            <Text className="text-[28px] font-bold text-neutral-800">
              Good Morning, Afsar
            </Text>
            <Text className="text-base text-neutral-500 mt-1">
              We Wish you have a good day
            </Text>
          </View>

          {/* Meditation Cards */}
          <View className="flex-row gap-6 mt-6">
            <View className="flex-1">
              <MeditationCard
                title="Basic"
                subtitle="COURSE"
                duration="3-10 MIN"
                image={images.basic}
                backgroundColor="bg-[#8E97FD]"
                textColor="text-white"
                buttonColor="bg-white/20"
                buttonTextColor="text-white"
              />
            </View>
            <View className="flex-1">
              <MeditationCard
                title="Relaxation"
                subtitle="MUSIC"
                duration="3-10 MIN"
                image={images.relaxing}
                backgroundColor="bg-[#FFC97E]"
                textColor="text-neutral-800"
                buttonColor="bg-neutral-800"
                buttonTextColor="text-white"
              />
            </View>
          </View>

          {/* Daily Thought */}
          <View className="mt-4 bg-[#333242] rounded-[15px] p-4 flex-row justify-between items-center h-[95px] overflow-hidden">
            <Image source={images.bgShape1} className="absolute top-0 left-0" />
            <Image
              source={images.bgShape2}
              className="absolute top-0 right-0"
            />
            <Image
              source={images.bgShape3}
              className="absolute bottom-0 right-32"
            />
            <View className="ml-2">
              <Text className="text-lg font-bold text-white">
                Daily Thought
              </Text>
              <Text className="text-xs text-white/80 mt-1">
                MEDITATION • 3-10 MIN
              </Text>
            </View>
            <TouchableOpacity className="bg-white/10 rounded-full p-3 mr-2">
              <Image
                source={images.player}
                className="w-6 h-6"
                resizeMode="contain"
                tintColor="white"
              />
            </TouchableOpacity>
          </View>

          {/* Recommended Section */}
          <View className="mt-8">
            <Text className="text-[28px] font-bold text-neutral-800 mb-4">
              Recommended for you
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="space-x-4"
            >
              <RecommendedCard
                title="Focus"
                subtitle="MEDITATION • 3-10 MIN"
                image={images.recommend1}
                backgroundColor="bg-[#AFDBC5]"
              />
              <RecommendedCard
                title="Happiness"
                subtitle="MEDITATION • 3-10 MIN"
                image={images.recommend2}
                backgroundColor="bg-[#FCDEA5]"
              />
              <RecommendedCard
                title="Focus"
                subtitle="MEDITATION • 3-10 MIN"
                image={images.recommend1}
                backgroundColor="bg-[#AFDBC5]"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
