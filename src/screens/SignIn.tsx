import BackgroundImg from "@assets/background.png";
import { Image, VStack } from "native-base";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Background SignIn"
        resizeMode="contain" //imagem irá se enquadrar no dispositivo
        position="absolute" //tudo irá ficar em cima dela
      />
    </VStack>
  );
}
