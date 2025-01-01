// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// // 카카오 로그인 버튼 클릭 시 실행되는 함수
// const KakaoLoginButton: React.FC = () => {
//   const [isKakaoReady, setIsKakaoReady] = useState(false); // 카카오 SDK가 준비되었는지 여부

//   // 카카오 SDK 초기화 여부를 체크
//   useEffect(() => {
//     const checkKakaoSDK = () => {
//       if (window.Kakao && window.Kakao.isInitialized()) {
//         setIsKakaoReady(true); // 카카오 SDK 초기화 완료 시 상태 업데이트
//       }
//     };

//     // SDK 초기화 상태 체크
//     checkKakaoSDK();

//     // SDK 로딩이 완료되면 확인할 수 있도록 listener 추가
//     window.addEventListener("load", checkKakaoSDK);

//     return () => {
//       window.removeEventListener("load", checkKakaoSDK); // 컴포넌트 언마운트 시 이벤트 제거
//     };
//   }, []); // 한 번만 실행되도록 빈 배열을 의존성으로 설정

//   const handleKakaoLogin = () => {
//     if (isKakaoReady && window.Kakao) {
//       window.Kakao.Auth.login({
//         success: (authObj: { access_token: string }) => {
//           console.log(authObj); // 로그인 성공 시 access token 출력
//         },
//         fail: (error: Error) => {
//           console.error(error.message); // 로그인 실패 시 오류 처리
//         },
//       });
//     } else {
//       console.error("Kakao SDK is not initialized yet.");
//     }
//   };

//   return (
//     <div>
//       <Image
//         src="/kakao_login_medium_narrow.png"
//         alt="Kakao Login Button"
//         width={214}
//         height={60}
//         className="cursor-pointer"
//         onClick={handleKakaoLogin} // 클릭 시 로그인 처리
//       />
//     </div>
//   );
// };

// export default KakaoLoginButton;
