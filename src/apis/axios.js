import axios from "axios";

// 초기 토큰 가져오기
let token = localStorage.getItem("accessToken");

// axios 인스턴스 생성
export const todayYouAxios = axios.create({
  baseURL: "http://localhost:8080", // 포트 8080 설정
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default todayYouAxios;
