"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const KakaoScript: React.FC = () => {
  useEffect(() => {
    // Kakao가 로드되었는지 확인
    if (typeof window !== "undefined" && window.Kakao) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string);
    }
  }, []);

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.min.js"
      integrity="sha384-kLbo2SvoNtOFiniJ1EQ9o2iDA8i3xp+O6Cns+L5cd4RsOJfl+43z5pvieT2ayq3C"
      crossOrigin="anonymous"
    />
  );
};

export default KakaoScript;
