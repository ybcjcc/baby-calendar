import { Box, Flex, Heading, Image, Input } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('/default-avatar.svg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const [babyName, setBabyName] = useState<string>(() => {
    const savedName = localStorage.getItem('babyName');
    return savedName || '小战魂';
  });

  useEffect(() => {
    localStorage.setItem('babyName', babyName);
  }, [babyName]);

  return (
    <Flex align="center" justify="center" py={4} gap={4}>
      <Box
        as="button"
        onClick={handleAvatarClick}
        position="relative"
        cursor="pointer"
      >
        <Image
          src={avatarUrl}
          alt="Baby Avatar"
          boxSize="60px"
          borderRadius="full"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/60"
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          display="none"
        />
      </Box>
      <Heading
        size="lg"
        fontFamily="'Noto Serif SC', serif"
        color="primary.600"
      >
        <Input
          value={babyName}
          onChange={(e) => setBabyName(e.target.value)}
          onBlur={() => localStorage.setItem('babyName', babyName)}
          variant="unstyled"
          fontSize="xl"
          fontWeight="bold"
          textAlign="center"
          placeholder="宝宝名字"
        />
      </Heading>
    </Flex>
  );
};

export default Header;