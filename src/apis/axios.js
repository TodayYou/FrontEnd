import axios from "axios";

// 초기 토큰 가져오기
let token = localStorage.getItem("accessToken");

// axios 인스턴스 생성
export const todayYouAxios = axios.create({
  baseURL: "https://todayyouuu.com/api", // 포트 8080 설정
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터를 추가하여 토큰을 항상 헤더에 추가
todayYouAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 항상 최신 토큰을 가져옴
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default todayYouAxios;