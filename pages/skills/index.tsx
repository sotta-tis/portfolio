import { Box, Flex, Text, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiCplusplus,
  SiTensorflow,
  SiPython,
  SiRaspberrypi,
  SiArduino,
  SiSwift,
  SiDart,
  SiFlutter,
  SiAmazon,
  SiGooglecloud,
  SiFirebase,
  SiGithubactions,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
  SiEslint,
  SiPrettier,
  SiJest,
  SiGoogle,
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

  type SkillItem = {
    key: string;
    label: string;
    icon: any;
    color: string;
    level: number; // 0-100
    href?: string;
  };

  const brandColorByKey: Record<string, string> = {
    html: "#E34F26",
    css: "#1572B6",
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    react: "#61DAFB",
    nextjs: "#000000",
    chakraui: "#59C3B6",
    php: "#777BB4",
    laravel: "#FF2D20",
    docker: "#2496ED",
    cplusplus: "#00599C",
    python: "#3776AB",
    tensorflow: "#FF6F00",
    raspberrypi: "#A22846",
    arduino: "#00979D",
    swift: "#FA7343",
    dart: "#0175C2",
    flutter: "#02569B",
    aws: "#FF9900",
    gcp: "#4285F4",
    firebase: "#FFCA28",
    githubactions: "#2088FF",
    nodejs: "#339933",
    express: "#000000",
    postgresql: "#4169E1",
    mysql: "#4479A1",
    sqlite: "#003B57",
    prisma: "#2D3748",
    redis: "#DC382D",
    tailwindcss: "#06B6D4",
    eslint: "#4B32C3",
    prettier: "#F7B93E",
    jest: "#C21325",
    playwright: "#45BA4B",
    gas: "#4285F4",
  };

  const categories: { name: string; items: SkillItem[] }[] = [
    {
      name: "Frontend",
      items: [
        { key: "html", label: "HTML", icon: SiHtml5, color: brandColorByKey.html, level: 90, href: "https://developer.mozilla.org/docs/Web/HTML" },
        { key: "css", label: "CSS", icon: SiCss3, color: brandColorByKey.css, level: 60, href: "https://developer.mozilla.org/docs/Web/CSS" },
        { key: "javascript", label: "JavaScript", icon: SiJavascript, color: brandColorByKey.javascript, level: 90, href: "https://developer.mozilla.org/docs/Web/JavaScript" },
        { key: "typescript", label: "TypeScript", icon: SiTypescript, color: brandColorByKey.typescript, level: 80, href: "https://www.typescriptlang.org" },
        { key: "react", label: "React", icon: SiReact, color: brandColorByKey.react, level: 75, href: "https://react.dev" },
        { key: "nextjs", label: "Next.js", icon: SiNextdotjs, color: brandColorByKey.nextjs, level: 80, href: "https://nextjs.org" },
        { key: "chakraui", label: "Chakra UI", icon: SiChakraui, color: brandColorByKey.chakraui, level: 50, href: "https://chakra-ui.com" },
      ],
    },
    {
      name: "Backend",
      items: [
        { key: "php", label: "PHP", icon: SiPhp, color: brandColorByKey.php, level: 90, href: "https://www.php.net" },
        { key: "laravel", label: "Laravel", icon: SiLaravel, color: brandColorByKey.laravel, level: 90, href: "https://laravel.com" },
        { key: "cplusplus", label: "C++", icon: SiCplusplus, color: brandColorByKey.cplusplus, level: 90, href: "https://isocpp.org" },
      ],
    },
    {
      name: "ML / Data",
      items: [
        { key: "python", label: "Python", icon: SiPython, color: brandColorByKey.python, level: 75, href: "https://www.python.org" },
        { key: "tensorflow", label: "TensorFlow", icon: SiTensorflow, color: brandColorByKey.tensorflow, level: 70, href: "https://www.tensorflow.org" },
      ],
    },
    {
      name: "Mobile",
      items: [
        { key: "swift", label: "Swift", icon: SiSwift, color: brandColorByKey.swift, level: 50, href: "https://www.swift.org" },
        { key: "dart", label: "Dart", icon: SiDart, color: brandColorByKey.dart, level: 50, href: "https://dart.dev" },
        { key: "flutter", label: "Flutter", icon: SiFlutter, color: brandColorByKey.flutter, level: 70, href: "https://flutter.dev" },
      ],
    },
    {
      name: "IoT / Embedded",
      items: [
        { key: "arduino", label: "Arduino", icon: SiArduino, color: brandColorByKey.arduino, level: 80, href: "https://www.arduino.cc" },
        { key: "raspberrypi", label: "Raspberry Pi", icon: SiRaspberrypi, color: brandColorByKey.raspberrypi, level: 80, href: "https://www.raspberrypi.com" },
      ],
    },
    {
      name: "DevOps",
      items: [
        { key: "docker", label: "Docker", icon: SiDocker, color: brandColorByKey.docker, level: 90, href: "https://www.docker.com" },
      ],
    },
    {
      name: "Cloud / Platform",
      items: [
        { key: "aws", label: "AWS", icon: SiAmazon, color: brandColorByKey.aws, level: 40, href: "https://aws.amazon.com" },
        { key: "gcp", label: "Google Cloud", icon: SiGooglecloud, color: brandColorByKey.gcp, level: 50, href: "https://cloud.google.com" },
        { key: "firebase", label: "Firebase", icon: SiFirebase, color: brandColorByKey.firebase, level: 40, href: "https://firebase.google.com" },
      ],
    },
    {
      name: "Database / Cache",
      items: [
        { key: "postgresql", label: "PostgreSQL", icon: SiPostgresql, color: brandColorByKey.postgresql, level: 70, href: "https://www.postgresql.org" },
        { key: "mysql", label: "MySQL", icon: SiMysql, color: brandColorByKey.mysql, level: 50, href: "https://www.mysql.com" },
        { key: "sqlite", label: "SQLite", icon: SiSqlite, color: brandColorByKey.sqlite, level: 50, href: "https://sqlite.org" },
        { key: "prisma", label: "Prisma", icon: SiPrisma, color: brandColorByKey.prisma, level: 70, href: "https://www.prisma.io" },
      ],
    },
    {
      name: "CI / Automation",
      items: [
        { key: "githubactions", label: "GitHub Actions", icon: SiGithubactions, color: brandColorByKey.githubactions, level: 70, href: "https://github.com/features/actions" },
        { key: "gas", label: "Google Apps Script", icon: SiGoogle, color: brandColorByKey.gas, level: 90, href: "https://www.google.com/script/start/" },
      ],
    },
    {
      name: "Tooling / Testing",
      items: [
        { key: "tailwindcss", label: "Tailwind CSS", icon: SiTailwindcss, color: brandColorByKey.tailwindcss, level: 80, href: "https://tailwindcss.com" },
        { key: "eslint", label: "ESLint", icon: SiEslint, color: brandColorByKey.eslint, level: 80, href: "https://eslint.org" },
        { key: "prettier", label: "Prettier", icon: SiPrettier, color: brandColorByKey.prettier, level: 85, href: "https://prettier.io" },
      ],
    },
  ];

  const categoryBgByName: Record<string, string> = {
    Frontend: "#0ea5e9",
    Backend: "blue.600",
    "ML / Data": "yellow.400",
    Mobile: "green.600",
    "IoT / Embedded": "teal.600",
    DevOps: "purple.600",
    "Cloud / Platform": "cyan.600",
    "Backend (Node)": "red.600",
    "Database / Cache": "pink.600",
    "CI / Automation": "gray.700",
    "Tooling / Testing": "gray.600",
  };

  const getBarColor = (level: number): string => {
    const hue = Math.round((level / 100) * 120); // 0:red, 120:green
    return `hsl(${hue}, 80%, 45%)`;
  };

  const SkillCard = ({ item }: { item: SkillItem }) => (
    <Box bg="white" borderRadius="12px" p={4} boxShadow="md">
      <Flex align="center" gap={3}>
        <Box color={item.color} fontSize={{ base: "2rem", md: "2.5rem" }}>
          <item.icon />
        </Box>
        <Flex direction="column" flex="1">
          <Flex justify="space-between" align="center">
            <Text fontWeight="bold">{item.label}</Text>
          </Flex>
          <Box mt={1} bg="gray.200" borderRadius="6px" h="8px" overflow="hidden">
            <Box w={`${item.level}%`} h="100%" bg={getBarColor(item.level)} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
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
        {/* Category sections moved below */}
      </Flex>
      {/* Category sections - full width outside the orange block */}
      <Box w="100%">
        {categories.map((c) => (
          <Flex
            key={c.name}
            position="relative"
            direction="column"
            bg={categoryBgByName[c.name] ?? "gray.600"}
            alignItems="center"
            justifyContent="center"
            zIndex={1}
            overflow="hidden"
            mb={4}
            py="10"
            px={{ base: "3", md: "10" }}
          >
            <Text
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              mb={4}
            >
              {c.name}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} w={{ base: "100%", md: "80%" }}>
              {c.items.map((it) => (
                <SkillCard key={it.key} item={it} />
              ))}
            </SimpleGrid>
          </Flex>
        ))}
      </Box>

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
