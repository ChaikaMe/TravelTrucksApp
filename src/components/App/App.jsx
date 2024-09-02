import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const VehicleFeatures = lazy(() =>
  import("../VehicleFeatures/VehicleFeatures")
);
const VehicleReviews = lazy(() => import("../VehicleReviews/VehicleReviews"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route index element={<Navigate to="features" replace />} />
            <Route path="features" element={<VehicleFeatures />} />
            <Route path="reviews" element={<VehicleReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
