"use client";
import React from "react";
import Image from "next/image";

interface KakaoAuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
  scope?: string;
}

const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    // window.Kakao가 존재하는지 확인
    if (typeof window === "undefined" || !window.Kakao || !window.Kakao.Auth) {
      alert("Kakao SDK가 로드되지 않았습니다. 새로고침 해주세요.");
      return;
    }
    // 카카오 로그인 요청
    window.Kakao.Auth.login({
      success: (authObj: KakaoAuthResponse) => {
        console.log("로그인 성공:", authObj);
        alert(`로그인 성공! 액세스 토큰: ${authObj.access_token}`);
      },
      fail: (err: unknown) => {
        console.error("로그인 실패:", err);
        alert("로그인 실패!");
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
