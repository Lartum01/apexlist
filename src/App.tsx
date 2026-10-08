import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GlobalPage } from "./pages/GlobalPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SubmissionPage } from "./pages/SubmissionPage";
import { TrackPage } from "./pages/TrackPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/global" element={<GlobalPage />} />
        <Route path="/submit" element={<SubmissionPage />} />
        <Route path="/tracks/:slug" element={<TrackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
