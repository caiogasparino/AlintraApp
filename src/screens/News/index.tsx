import {Center, FlatList, Skeleton, Spacer, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NewsCard} from '~/components';
import {palette} from '~/utils/colors';
import {Container} from './styles';
import {data} from '~/mock';

export const News = () => {
  const [renderedItems, setRenderedItems] = useState(5);
  const [loadingMore, setLoadingMore] = useState(false);

  const separator = () => {
    return <Spacer height={5} />;
  };

  const renderMoreItems = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setRenderedItems(prevItems => prevItems + 5);
      setLoadingMore(false);
    }, 1000);
  };

  const skeleton = () => {
    return (
      <Center w="100%" h="100%" justifyContent="center">
        <VStack
          w="90%"
          maxW="400"
          borderWidth={1}
          space={8}
          overflow="hidden"
          rounded="md"
          _dark={{borderColor: 'coolGray.500'}}
          _light={{borderColor: 'coolGray.200'}}>
          <Skeleton h={40} />
          <Skeleton.Text px={4} />
          <Skeleton px={4} my={4} rounded="md" startColor="primary.100" />
        </VStack>
      </Center>
    );
  };

  return (
    <Container>
      <StatusBar backgroundColor={palette.darkBar} />
      <Text bold fontSize={40} color={palette.white}>
        News
      </Text>
      {!loadingMore && (
        <FlatList
          data={data.slice(0, renderedItems)}
          renderItem={({item}) => <NewsCard {...item} key={item.id} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={separator}
          onEndReached={renderMoreItems}
          onEndReachedThreshold={0.1}
        />
      )}
      {loadingMore && skeleton()}
    </Container>
  );
};
