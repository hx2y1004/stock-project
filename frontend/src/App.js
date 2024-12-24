/** 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// 상단 기초 템플릿 혹시 몰라 남겨둔다 . 
*/

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* 상단 네비게이션 바 */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <a href="#" className="text-lg font-bold">
            토스증권
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            홈
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            뉴스
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            주식 골라보기
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            내 계좌
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="🔍 종목 검색"
            className="px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700">
            로그인
          </button>
        </div>
      </nav>

      {/* 주요 지수 섹션 */}
      <section className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">전체</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-secondary rounded hover:bg-gray-600">
              국내
            </button>
            <button className="px-4 py-2 bg-secondary rounded hover:bg-gray-600">
              해외
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {/* 개별 지수 카드 */}
          {[
            {
              name: "나스닥",
              value: "20,031.13",
              change: "+266.24 (1.3%)",
              trend: "up",
            },
            {
              name: "S&P 500",
              value: "6,040.04",
              change: "+65.97 (1.1%)",
              trend: "up",
            },
            {
              name: "VIX",
              value: "14.27",
              change: "-2.51 (14.9%)",
              trend: "down",
            },
            {
              name: "코스피",
              value: "2,440.52",
              change: "-1.49 (0.06%)",
              trend: "down",
            },
          ].map((index, i) => (
            <div key={i} className="p-4 bg-secondary rounded shadow-md">
              <h3 className="text-lg font-bold">{index.name}</h3>
              <p className="text-xl font-bold">{index.value}</p>
              <p
                className={`text-sm ${
                  index.trend === "up" ? "text-accent" : "text-danger"
                }`}
              >
                {index.change}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 뉴스 섹션 */}
      <section className="p-6">
        <h2 className="text-2xl font-bold">주요 뉴스</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {["뉴스 1", "뉴스 2", "뉴스 3"].map((news, i) => (
            <div key={i} className="p-4 bg-secondary rounded shadow-md">
              <img
                src="/news-placeholder.png"
                alt="뉴스"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-bold">{news}</h3>
              <p className="text-sm text-gray-400">몇 시간 전 - 소스</p>
            </div>
          ))}
        </div>
      </section>

      {/* 관심 종목 섹션 */}
      <section className="p-6 bg-gray-800">
        <h2 className="text-2xl font-bold">관심 종목 TOP 10</h2>
        <ul className="mt-4 space-y-4">
          {[
            { name: "테슬라", price: "20,000원", change: "+5.4%" },
            { name: "애플", price: "150,000원", change: "+1.2%" },
          ].map((stock, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-4 bg-gray-700 rounded shadow-md"
            >
              <span>{stock.name}</span>
              <span className="font-bold">{stock.price}</span>
              <span
                className={`text-sm ${
                  stock.change.includes("+") ? "text-accent" : "text-danger"
                }`}
              >
                {stock.change}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;


