import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const ProjectSection = ({
    title,
    period,
    role,
    overview,
    devEnv,
    roleAndScale,
    responsibilities,
    bgColor,
    detailLink,
  }: {
    title: string;
    period: string;
    role: string;
    overview: string;
    devEnv: {
      os?: string;
      language?: string;
      fw?: string;
      db?: string;
    };
    roleAndScale: {
      role: string;
      scale: string;
    };
    responsibilities: string[];
    bgColor: string;
    detailLink?: string;
  }) => {
    return (
      <Flex
        position="relative"
        direction="column"
        bg={bgColor}
        color="navy.900"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
        overflow="hidden"
        py={{ base: "10", md: "10" }}
      >
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin={{ md: "10", base: "3" }}
          justifyContent="center"
          w={{ base: "auto", md: "80%" }}
          borderRadius="20px"
          p={{ base: "5", md: "8" }}
        >
          <Box>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              mb="2"
            >
              {title}
            </Text>
            <Text fontSize="lg" color="black" mb="1">
              <strong>期間：</strong>{period}
            </Text>
            <Text fontSize="lg" color="black" mb="4">
              <strong>職種：</strong>{role}
            </Text>

            <Text fontSize="xl" fontWeight="bold" color="black" mb="2" mt="4">
              概要
            </Text>
            <Text fontSize="md" color="black" mb="4" whiteSpace="pre-line">
              {overview}
            </Text>

            <Text fontSize="xl" fontWeight="bold" color="black" mb="2" mt="4">
              開発環境
            </Text>
            <Box mb="4">
              {devEnv.os && (
                <Text fontSize="md" color="black">
                  <strong>OS：</strong>{devEnv.os}
                </Text>
              )}
              {devEnv.language && (
                <Text fontSize="md" color="black">
                  <strong>言語：</strong>{devEnv.language}
                </Text>
              )}
              {devEnv.fw && (
                <Text fontSize="md" color="black">
                  <strong>FW：</strong>{devEnv.fw}
                </Text>
              )}
              {devEnv.db && (
                <Text fontSize="md" color="black">
                  <strong>DB：</strong>{devEnv.db}
                </Text>
              )}
            </Box>

            <Text fontSize="xl" fontWeight="bold" color="black" mb="2" mt="4">
              役割・規模
            </Text>
            <Box mb="4">
              <Text fontSize="md" color="black">
                <strong>役割：</strong>{roleAndScale.role}
              </Text>
              <Text fontSize="md" color="black">
                <strong>規模：</strong>{roleAndScale.scale}
              </Text>
            </Box>

            <Text fontSize="xl" fontWeight="bold" color="black" mb="2" mt="4">
              担当業務
            </Text>
            <Box as="ul" pl="5" mb="4">
              {responsibilities.map((resp, index) => (
                <Text key={index} as="li" fontSize="md" color="black" mb="1">
                  {resp}
                </Text>
              ))}
            </Box>
            {detailLink && (
              <Box mt="4" display="flex" justifyContent="center">
                <Link
                  href={detailLink}
                  _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
                >
                  <Box
                    w="10rem"
                    h="10rem"
                    bg="rgba(10, 25, 47, 0.9)"
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="10px"
                    boxShadow="md"
                    _hover={{ bg: "rgba(30, 45, 67, 0.9)", boxShadow: "lg" }}
                  >
                    <Text p="3" fontSize="3xl" fontWeight="bold">
                      More Detail
                    </Text>
                  </Box>
                </Link>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex direction="column" w="100%" h="auto" bg="rgba(10, 25, 47, 0.9)">
      {/* タイトル */}
      <Box
        py={{ base: "8", md: "10" }}
        textAlign="center"
        bg="rgba(10, 25, 47, 0.9)"
      >
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="white"
          mb="2"
        >
        開発経験
        </Text>
      </Box>

      {/* 高専プロコン2022 */}
      <ProjectSection
        title="高専プロコン2022 競技用ソルバーアプリケーション"
        period="2022年3月 ～ 2022年12月"
        role="ソフトウェアエンジニア"
        overview="高専プロコン2022競技部門向けソルバーアプリケーションを開発。
C++による高速音声波形解析、マルチスレッド処理、SIMD最適化を実装。
最優秀賞（文部科学大臣賞）を受賞。"
        devEnv={{
          os: "Windows, Linux",
          language: "C++",
          fw: "OpenSiv3D",
        }}
        roleAndScale={{
          role: "ソフトウェアエンジニア",
          scale: "3名",
        }}
        responsibilities={[
          "アルゴリズム設計",
          "高速化（マルチスレッド・SIMD最適化）",
          "GUI実装",
          "サーバー連携（HTTP通信）",
        ]}
        bgColor="rgba(10, 25, 47, 0.9)"
        detailLink="https://www.ct.omu.ac.jp/info/news/entry-16997.html"
      />

      {/* IoTロボット制御システム */}
      <ProjectSection
        title="IoTロボット制御システム"
        period="2022年4月 ～ 2022年12月"
        role="エンジニア"
        overview="Dobotロボットアームおよびグリッパー制御を行うIoTシステムを開発。
画像認識による物体検出、Next.js管理画面、Drogon Frameworkによるバックエンドを構築。"
        devEnv={{
          os: "Windows, macOS",
          language: "TypeScript, C++, Python",
          fw: "Next.js, React, Drogon Framework, Flask",
          db: "PostgreSQL",
        }}
        roleAndScale={{
          role: "フルスタックエンジニア",
          scale: "3〜5名",
        }}
        responsibilities={[
          "システム設計",
          "フロントエンド実装",
          "バックエンド実装",
          "ロボット制御実装",
        ]}
        bgColor="yellow.300"
      />

      {/* 公開集客用Webサイト／社内管理システム */}
      <ProjectSection
        title="公開集客用Webサイト／社内管理システム"
        period="2023年1月 ～ 現在"
        role="フルスタックエンジニア"
        overview="公開集客用Webサイトおよび社内管理システムの開発を担当。
物件情報管理を中心としたCRUD機能を実装。
React（App Router）とLaravel（GraphQL）を用いたフルスタック開発を実施し、
既存WordPressサイトからの移行にも対応。"
        devEnv={{
          os: "Linux",
          language: "TypeScript, PHP",
          fw: "React, Laravel, Next.js",
          db: "MySQL, PostgreSQL",
        }}
        roleAndScale={{
          role: "フルスタックエンジニア",
          scale: "5〜10名",
        }}
        responsibilities={[
          "要件定義・設計",
          "フロントエンド実装",
          "バックエンドAPI実装",
          "DB設計",
        ]}
        bgColor="orange.400"
      />

      {/* EMG Mobile Analyzer */}
      <ProjectSection
        title="EMG Mobile Analyzer（表面筋電位解析システム）"
        period="2024年1月 ～ 2024年6月"
        role="フルスタックエンジニア"
        overview="表面筋電位（EMG）を用いた解析・推論・学習を行うモバイルアプリケーションを開発。
Flutterによるモバイルアプリ、C++ネイティブエンジンによる高速特徴抽出、
Core MLを用いたiOS端末上でのon-device学習を実装。
BLE経由でMyoWareセンサーから1kHzサンプリングデータを取得するハードウェアも併せて開発。"
        devEnv={{
          os: "iOS",
          language: "Dart, Swift, C++, Python",
          fw: "Flutter, Core ML",
          db: "SQLite",
        }}
        roleAndScale={{
          role: "フルスタックエンジニア",
          scale: "1名",
        }}
        responsibilities={[
          "システム設計",
          "モバイルアプリ実装",
          "機械学習モデル設計・実装",
          "on-device学習実装",
          "組み込み（BLEデバイス）開発",
        ]}
        bgColor="orange.600"
      />

      {/* toC向けフリマ形式サービス */}
      <ProjectSection
        title="toC向けフリマ形式サービス（買取機能追加）"
        period="2024年8月 ～ 2024年9月"
        role="フルスタックエンジニア"
        overview="既存toC向けフリマ形式サービスにおける買取機能の追加開発を担当。
React Native（Expo）によるモバイルフロントエンドおよび
NestJS（GraphQL）によるバックエンドAPIを実装。"
        devEnv={{
          os: "iOS, Android",
          language: "TypeScript",
          fw: "React Native, Expo, Next.js",
          db: "PostgreSQL, Google BigQuery",
        }}
        roleAndScale={{
          role: "フルスタックエンジニア",
          scale: "10〜20名",
        }}
        responsibilities={[
          "モバイルアプリ実装",
          "バックエンドAPI実装",
          "DB設計",
        ]}
        bgColor="orange.500"
      />

      {/* 個人研究開発｜フルスタックエンジニア */}
      <Flex
        position="relative"
        direction="column"
        bg="rgba(10, 25, 47, 0.9)"
        color="navy.900"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
        overflow="hidden"
        py={{ base: "10", md: "10" }}
      >
        <Box
          bg="rgba(255, 240, 220, 1)"
          margin={{ md: "10", base: "3" }}
          justifyContent="center"
          w={{ base: "auto", md: "80%" }}
          borderRadius="20px"
          p={{ base: "5", md: "8" }}
        >
          <Box>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              mb="2"
            >
              個人研究開発｜フルスタックエンジニア
            </Text>
            <Text fontSize="lg" color="black" mb="4">
              <strong>期間：</strong>2025年8月 ～ 2025年12月
            </Text>

            <Text fontSize="xl" fontWeight="bold" color="black" mb="2" mt="4">
              概要
            </Text>
            <Text fontSize="md" color="black" mb="4" whiteSpace="pre-line">
              個人研究として、Web・モバイル・組み込み・機械学習領域を横断した研究開発を実施。
              アルゴリズム設計、ニューラルネットワーク設計、on-device学習、ロボット制御などを含む
              複数プロジェクトを一貫して担当。
            </Text>
          </Box>
        </Box>
      </Flex>

      {/* 社内システム（外部委託）／LLM・Embedding活用パッケージ */}
      <ProjectSection
        title="社内システム（外部委託）／LLM・Embedding活用パッケージ"
        period="2025年11月 ～ 2026年1月"
        role="委託エンジニア（フルスタック）"
        overview="外部委託案件として、既存社内システムの編集・閲覧機能を開発。
OpenAI系LLMおよびEmbeddingを活用したパッケージプロダクトの機能開発も担当。"
        devEnv={{
          os: "Windows",
          language: "TypeScript, C#",
          fw: "Angular, ASP.NET, LangChain",
        }}
        roleAndScale={{
          role: "フルスタックエンジニア",
          scale: "3名",
        }}
        responsibilities={[
          "フロントエンド実装",
          "バックエンド実装",
          "LLM・Embedding設計および実装",
        ]}
        bgColor="yellow.400"
      />

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
