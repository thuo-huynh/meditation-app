import { Button } from '@/components/ui/button';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { images } from '@/constants/images';

export default function SplashScreen() {
  return (
    <View className="flex-1">
      <Image
        source={images.bg1}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      <View className="flex-1 px-5 pt-8">
        {/* Top Section */}
        <View className="flex-1 items-center">
          <Image
            source={images.logo}
            className="mt-12 w-[180px] h-[50px]"
            resizeMode="contain"
          />
          <Image
            source={images.enjoy}
            className="mt-28 w-[80%] h-[280px]"
            resizeMode="contain"
          />
        </View>

        {/* Bottom Section */}
        <View className="flex-1 justify-end pb-20">
          <Text className="text-[30px] font-bold text-center text-gray-800 mb-2">
            We are what we do
          </Text>
          <Text className="text-base text-center text-gray-600 px-8">
            Thousand of people are using silent moon for smalls meditation
          </Text>

          <TouchableOpacity
            className="mt-14 bg-[#8E97FD] py-4 rounded-full"
            onPress={() => {}}
          >
            <Text className="text-white font-semibold text-center">
              SIGN UP
            </Text>
          </TouchableOpacity>

          <View className="mt-5 flex-row justify-center items-center">
            <Text className="text-sm text-gray-500">
              ALREADY HAVE AN ACCOUNT?{' '}
            </Text>
            <Link href="/login" asChild>
              <Text className="text-sm text-[#8E97FD] font-medium">LOG IN</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
