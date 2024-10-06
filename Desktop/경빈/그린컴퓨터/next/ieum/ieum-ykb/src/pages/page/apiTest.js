import React, { useState } from 'react';
import useAladinStore from '../api/aladin';  

function AladinBookSearch() {
  const { data, loading, error, fetchBooks } = useAladinStore();  // 상태와 액션 가져오기
  const [query, setQuery] = useState('');  // 검색어 상태

  const handleSearch = () => {
    if (query.trim()) {
      fetchBooks(query);  // 책 검색 API 호출
    }
  };

  return (
    <div>
      <h1>알라딘 도서 검색</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="도서 제목을 입력하세요" 
      />
      <button onClick={handleSearch}>검색</button>

      {/* 로딩 상태 표시 */}
      {loading && <p>로딩 중...</p>}

      {/* 에러 발생 시 에러 메시지 표시 */}
      {error && <p style={{ color: 'red' }}>에러: {error}</p>}

      {/* 데이터가 있을 때 도서 목록 표시 */}
      {data.length > 0 && (
        <ul>
          {data.map((book) => (
            <li key={book.isbn}>
              <img src={book.cover} alt={book.title} />
              <p>{book.title}</p>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AladinBookSearch;
