"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface KakaoAuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
  scope?: string;
}

const KakaoLoginButton = () => {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(
          process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string
        );
        console.log("Kakao SDK 초기화 완료");
      }
      setIsKakaoLoaded(true);
    }
  }, []);

  const handleKakaoLogin = () => {
    if (!isKakaoLoaded) {
      alert("Kakao SDK가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    if (!window.Kakao.Auth) {
      alert("Kakao Auth 객체가 정의되지 않았습니다.");
      return;
    }

    window.Kakao.Auth.login({
      success: (authObj: KakaoAuthResponse) => {
        console.log("로그인 성공:", authObj);
        alert(`로그인 성공! 액세스 토큰: ${authObj.access_token}`);
      },
      fail: (err: unknown) => {
        console.error("로그인 실패:", err);
        alert("로그인 실패! 다시 시도해주세요.");
      },
    });
  };

  return (
    <div onClick={handleKakaoLogin}>
      <Image
        src="/kakao_login_medium_narrow.png"
        alt="Kakao Login Button"
        width={214}
        height={60}
        className="mt-[500px] cursor-pointer"
      />
    </div>
  );
};

export default KakaoLoginButton;
