import React, {useLayoutEffect} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white pt-2">
       {/* pt-5 was taken out because it made the header too big */}

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-1 mx-2">
          {/* mx-4 but I changed it to 2 because it was to much */}
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView>
           {/* Categories */}

           {/* Featured Rows */}
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
