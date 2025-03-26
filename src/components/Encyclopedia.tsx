import React, { useState } from 'react';
import {
  Box,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Tag,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { categories, encyclopediaItems, EncyclopediaItem } from '../data/encyclopedia';

const Encyclopedia: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 根据搜索词和分类过滤百科条目
  const filteredItems = encyclopediaItems.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || item.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <VStack spacing={6} align="stretch" w="100%" p={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="搜索孕期知识..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>

      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4}>
        {categories.map(category => (
          <Card
            key={category.id}
            cursor="pointer"
            onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
            bg={category.id === selectedCategory ? 'primary.50' : 'white'}
            _hover={{ bg: 'primary.50' }}
          >
            <CardBody>
              <VStack spacing={2}>
                <Text fontSize="xl" textAlign="center">{category.title}</Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  {category.description}
                </Text>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Box>
        <Heading size="md" mb={4}>
          {selectedCategory 
            ? categories.find(c => c.id === selectedCategory)?.title
            : '全部知识'}
        </Heading>
        <Accordion allowMultiple>
          {filteredItems.map((item: EncyclopediaItem) => (
            <AccordionItem key={item.id}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">{item.title}</Text>
                  <Box mt={2}>
                    {item.tags.map((tag, index) => (
                      <Tag
                        key={index}
                        size="sm"
                        variant="subtle"
                        colorScheme="primary"
                        mr={2}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Box>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {item.content.split('\n').map((line, index) => (
                  <Text key={index}>{line}</Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </VStack>
  );
};

export default Encyclopedia;