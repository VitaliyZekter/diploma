import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemCarDontainer = ({ imageSrc, title, location, data, isLoading }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity className='rounded-md border border-black space-y-2 px-3 py-2 shadow-md bg-red-100 w-[152px]' onPress={() => navigation.navigate('Item', { param: data })}>
            {isLoading ? <Text>Loading...</Text> : (<>
                <Image
                    className='w-39 h-40 rounded-md object-cover'
                    source={{ uri: imageSrc }} />

                {title ? (
                    <>
                        <Text className='text-[#EF4444] text-[18px] font-bold'>
                            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
                        </Text>

                        <View className='flex-row items-center space-x-1'>
                            <FontAwesome name="map-marker" size={20} color="#000" />
                            <Text className='text-[#EF4444] text-[14px] font-bold'>
                                {location?.length > 18 ? `${location.slice(0, 18)}..` : location}</Text>
                        </View>
                    </>) : <></>}
            </>)}

        </TouchableOpacity>
    )
}

export default ItemCarDontainer