import React from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import useFetch from '@/services/usefetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: '' }), true);

  const movieList = Array.isArray(movies) ? movies : (movies?.results ?? []);

  if (moviesLoading) {
    return (
      <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0" />
        <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
      </View>
    );
  }

  if (moviesError) {
    return (
      <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0" />
        <Text className="text-white p-4">Error loading movies: {moviesError?.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movieList}
        keyExtractor={item => String(item.id)}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          paddingRight: 10,
          marginBottom: 10,
        }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 120 }}
        ListHeaderComponent={
          <View>
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
            <View className="mt-5">
              <SearchBar onPress={() => router.push('/search')} placeholder="Search" />
              <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => <MovieCard {...item} />}
      />
    </View>
  );
}
