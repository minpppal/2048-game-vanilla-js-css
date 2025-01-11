"use client";
import Script from "next/script";

const KakaoScript = () => {
  const handleKakaoInit = () => {
    if (window.Kakao) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string); // 카카오 SDK 초기화
      console.log("Kakao SDK initialized"); // 초기화 완료 로그
    }
  };

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
      integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka"
      crossOrigin="anonymous"
      onLoad={handleKakaoInit} // SDK 로드 완료 후 초기화 함수 실행
    />
  );
};

export default KakaoScript;
