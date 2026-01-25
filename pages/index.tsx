import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

// 回転アニメーションを定義
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Home: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const router = useRouter();
  return (
    <Flex direction="column" w="auto" h="auto">
      {/* top */}
      <Box
        display="flex"
        position="relative"
        bg="rgba(10, 25, 47, 0.9)"
        color="navy.900"
        h="80vh"
        alignItems="start"
        justifyContent="center"
        zIndex={1}
        overflow="hidden"
      >
        <Flex direction="column">
          <Text
            mt={{ base: "20" }}
            fontFamily={"Outfit,Lato,sans-serif"}
            textAlign="center"
            color="white"
            fontSize={"md"}
          >
            thank you for visiting my website！
          </Text>
          <Text
            mt="10px"
            fontFamily={"Outfit,Lato,sans-serif"}
            color="white"
            fontSize={"6xl"}
          >
            Sota Toshizumi
          </Text>
          <Text
            mt="10px"
            fontFamily={"Outfit,Lato,sans-serif"}
            color="white"
            fontSize={"6xl"}
          >
            Portfolio
          </Text>
        </Flex>
        {/* セクション間のSVG */}
        <Box
          position="absolute"
          top="50%"
          animation={`${rotate} 20s linear infinite`}
          w="auto"
          h="100%"
          zIndex={1}
        >
          <img
            src={`${basePath}/moon.svg`} // publicディレクトリ内のファイルパス
            alt="Wave"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>

      {/* about me */}
      <Box
        bg="orange.600"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
      >
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin={{ md: "10", base: "3" }}
          mt={{ base: "10" }}
          mb={{ base: "10" }}
          justifyContent="center"
          w={{ base: "auto", md: "80%" }}
          borderRadius="50px"
        >
          {/* タイトル */}
          <Box justifyContent="center" direction="column">
            <Text
              mt="5"
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              About Me
            </Text>
            <Text
              textAlign="center"
              fontSize="md"
              fontWeight="bold"
              color="black"
            >
              - 私について ー
            </Text>
          </Box>

          {/* 自己紹介 */}
          <Box
            mt="5"
            mb="5"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{
              base: "center",
              md: "space-around",
            }}
            alignItems={{
              base: "center",
              md: "space-around",
            }}
          >
            <Box order={{ base: 2, md: 1 }} m="10">
              <Text color="black" fontSize="5xl">
                Sota Toshizumi
              </Text>
              <Text color="black" fontSize="2xl">
                年澄荘多
              </Text>
              <Text color="black" fontSize="2xl">
                2005年5月27日生まれ
              </Text>
              <Text color="black" fontSize="xl">
                大阪公立大学工業高等専門学校
              </Text>
            </Box>
            <Image
              order={{ base: 1, md: 2 }}
              justifyContent="center"
              borderRadius="50px"
              src={`${basePath}/myPhoto.jpg`}
              w="60"
            ></Image>
          </Box>

          {/* 自己紹介文 */}
          <Box
            mt="5"
            mb="5"
            px={{ base: "5", md: "10" }}
            pb="5"
          >
            <Text
              color="black"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.8"
              whiteSpace="pre-line"
            >
              アルゴリズム競技において優勝経験を持ち、計算量や最適化を意識した実装力を強みとするフルスタックエンジニア。
              Web・モバイル・組み込み領域を横断し、React / Flutter を用いたフロントエンド開発、
              Laravel・ASP.NET・NestJS によるバックエンド設計、
              MySQL / PostgreSQL を用いたDB設計、AWS・GCP・Azure・オンプレ環境での運用まで幅広く経験。
              また、ニューラルネットワークの設計・学習を含む機械学習実装、ロボットアーム制御、画像認識、
              on-device機械学習、OpenAI系LLM＋LangChainを用いたプロダクト開発にも携わり、
              PoCに留まらない実装・運用まで一貫して対応。
              要件理解から技術選定、実装・最適化まで主体的に推進できる点を強みとする。
            </Text>
          </Box>
        </Box>
      </Box>

      {/* もっと */}
      <Box
        bg="yellow.400"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        overflow="hidden"
        flexWrap="wrap"
        zIndex={2}
      >
        {/* タイトル */}
        <Box
          colorScheme="blue"
          justifyContent="center"
          direction="column"
          overflow="wrap"
        >
          <Box
            mt="5"
            textAlign="center"
            fontSize="4xl"
            fontWeight="bold"
            color="black"
          >
            Detail
          </Box>
          <Box textAlign="center" fontSize="md" fontWeight="bold" color="black">
            -　もっと詳しく　ー
          </Box>
        </Box>

        {/* ボタン */}
        <Button
          onClick={() => router.push("/skills")}
          w="80%"
          h="auto"
          borderRadius="5"
          fontSize="4xl"
          bg="green.600"
          color="white"
          _hover={{ bg: "orange.600" }}
        >
          <Box p="5">Skills</Box>
        </Button>
        <Button
          onClick={() => router.push("/achievements")}
          w="80%"
          h="auto"
          borderRadius="5"
          fontSize="4xl"
          bg="blue.600"
          color="white"
          _hover={{ bg: "orange.600" }}
          overflow="wrap"
        >
          <Box p="3">
            Achievements
            <Box fontSize="lg" mt="5">
              -制作物・受賞歴-
            </Box>
          </Box>
        </Button>
        <Button
          onClick={() => router.push("/")}
          w="80%"
          h="auto"
          bg="purple.600"
          borderRadius="5"
          fontSize="4xl"
          color="white"
          _hover={{ bg: "orange.600" }}
          disabled
        >
          <Box p="3">
            About Me
            <Box fontSize="lg" mt="5">
              -趣味や好きなこと-
            </Box>
          </Box>
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;
