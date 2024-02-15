import React from 'react';
import {Box, Heading, Text, VStack, Spacer, HStack, Center} from 'native-base';
import {palette} from '~/utils/colors';
import {News} from '~/mock';

export const NewsCard = ({
  type,
  title,
  introduction,
  publication_date,
}: News) => {
  return (
    <Center w="100%">
      <VStack
        w="90%"
        padding={3}
        space={8}
        overflow="hidden"
        rounded="md"
        backgroundColor={palette.darkBackground}
        borderWidth={2}
        borderColor={palette.lighter1}>
        <Heading fontSize="xl" p="0" pb="0" color={palette.lighter2}>
          {type}
        </Heading>
        <Box>
          <HStack space={[2, 3]} justifyContent="space-between">
            <VStack>
              <Text color="coolGray.400" bold>
                {title}
              </Text>
              <Spacer height={3} />
              <Text color="coolGray.500">{introduction}</Text>
              <Spacer height={5} />
              <Text fontSize="xs" color="coolGray.200" alignSelf="flex-start">
                {publication_date}
              </Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
      </VStack>
    </Center>
  );
};
