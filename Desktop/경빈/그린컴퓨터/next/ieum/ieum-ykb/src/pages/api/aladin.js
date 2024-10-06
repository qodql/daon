import create from 'zustand';

// 알라딘 API에서 책 데이터 가져오는 함수
const bookApi = async (query) => {
  const apiKey = 'ttbbengby1506001';
  const baseURL = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${apiKey}&Query=${query}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;
  
  const response = await fetch(baseURL);
  if (!response.ok) {
    throw new Error('API 요청 실패');
  }
  const data = await response.json();
  return data.item;
};

// Zustand 스토어 생성
const useStore = create((set) => ({
  data: [],          // 책 데이터 상태
  loading: false,    // 로딩 상태
  error: null,       // 에러 상태

  // API에서 책 데이터를 가져오는 액션
  fetchBooks: async (query) => {
    set({ loading: true, error: null });  // 로딩 시작, 에러 초기화
    try {
      const books = await bookApi(query);
      set({ data: books, loading: false });  // 데이터 설정, 로딩 종료
    } catch (error) {
      set({ error: error.message, loading: false });  // 에러 발생 시 에러 상태 업데이트
    }
  },
}));
