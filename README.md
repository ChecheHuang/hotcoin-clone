## 安裝與運行

### 安裝依賴

使用以下指令安裝專案所需的依賴：

```sh
pnpm install
```

運行開發伺服器
使用以下指令啟動開發伺服器：

```sh
pnpm run dev
```

打包專案
使用以下指令打包專案：

```sh
pnpm run build
```

## 主要技術棧

- React: 用於構建使用者界面的 JavaScript 庫。
- TypeScript: JavaScript 的超集，增加了靜態類型。
- Tailwind CSS: 一個功能強大的 CSS 框架，用於快速構建自定義設計。
- Vite: 一個快速的前端構建工具。
- React Query: 用於資料獲取、快取和同步的庫。
- React Router: 用於在 React 應用中進行路由管理。
- Zustand: 一個小型、快速的 React 狀態管理庫。

## 目錄結構

- src: 源碼目錄
  - src/App.tsx: 應用的主要組件
  - assets/: 資源文件夾 (圖片、動畫等)
  - components/: 通用組件
    - ErrorBoundary.tsx: 錯誤邊界組件
    - model/: 模型相關組件
    - ui/: UI 組件
  - config/: 配置文件
  - i18n/: 國際化相關文件
  - lib/: 工具函數和庫
  - main.tsx: 應用的入口文件
  - mock/: 模擬數據
  - providers/: 提供者組件
  - resources/: 資源文件
  - router/: 路由配置
  - stores/: 狀態管理
  - types/: TypeScript 類型定義
  - views/: 頁面組件
  - vite-env.d.ts: Vite 環境定義文件

## 主要功能

- Lazy Loading: 使用 React.lazy 和 Suspense 進行組件的懶加載。
- 錯誤邊界: 使用 ErrorBoundary 組件捕獲並處理錯誤。
- 國際化: 使用 i18next 進行多語言支持。
- 狀態管理: 使用 Zustand 進行狀態管理。
- 資料獲取: 使用 React Query 進行資料獲取和快取。
