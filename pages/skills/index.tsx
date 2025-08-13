import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiCplusplus,
  SiTensorflow,
  SiPython,
} from "react-icons/si";

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
  const router = useRouter();

  const skills = [
    "Web Development",
    "IoT Development",
    "Control Systems Design",
    "Competitive Programming",
    "Data Analysis",
    "Machine Learning Modeling",
    "Mechanical Design",
    "Project Management",
  ];

  const logos = [
    "css",
    "html",
    "javascipt",
    "typescript",
    "react",
    "php",
    "laravel",
    "docker",
    "c++",
    "tensorflow",
    "python",
  ];

  const iconByName: Record<string, any> = {
    css: SiCss3,
    html: SiHtml5,
    javascipt: SiJavascript,
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: SiReact,
    php: SiPhp,
    laravel: SiLaravel,
    docker: SiDocker,
    "c++": SiCplusplus,
    tensorflow: SiTensorflow,
    python: SiPython,
  };
  return (
    <Flex direction="column" w="100%" h="auto">
      {/* about me */}
      <Flex p="5" bg="orange.600" direction="column" alignItems="center">
        {/* タイトル */}
        <Box p="3" bg="rgba(255, 240, 220, 1)" w="80%" borderRadius="50px">
          <Box>
            <Text
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="black"
            >
              Skills
            </Text>
          </Box>
        </Box>
        <Flex wrap="wrap" w="80%" p={4}>
          {skills.map((skill, index) => (
            <Flex
              key={index}
              direction="column"
              bg="rgba(255, 240, 220, 1)"
              height="auto"
              width={{ md: "48%", base: "100%" }}
              borderRadius="25px"
              m="5px"
            >
              <Text alignSelf="center" m="3" fontSize="2xl">
                {skill}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex wrap="wrap" w="100%" p={4} justifyContent="center" gap={4}>
          {logos.map((name, index) => {
            const IconComp = iconByName[name];
            if (!IconComp) return null;
            return (
              <Flex
                key={index}
                w={{ base: "30%", md: "20%" }}
                h={{ base: "80px", md: "100px" }}
                overflow="hidden"
                borderRadius="10px"
                boxShadow="md"
                bg="white"
                alignItems="center"
                justifyContent="center"
              >
                <Box fontSize={{ base: "2.5rem", md: "3rem" }} color="black">
                  <IconComp />
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      {/* 戻る */}
      <Box
        bg="orange.600"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        overflow="hidden"
        flexWrap="wrap"
        zIndex={2}
        p="20"
      >
        {/* ボタン */}
        <Button
          onClick={() => router.push("/")}
          w="80%"
          h="auto"
          borderRadius="10px"
          fontSize="3xl"
          bg="rgba(255, 240, 220, 1)"
          _hover={{ bg: "rgba(255, 230, 200, 1)" }}
        >
          <Box p="5" color="black" fontWeight="bold">
            Back to Top
          </Box>
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;
