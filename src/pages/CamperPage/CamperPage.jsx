import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { fetchExactCamper } from "../../redux/campers/ops-campers";
import { selectCamper } from "../../redux/campers/selectors-campers";
import css from "./CamperPage.module.css";
import VehicleDetailsSection from "../../components/VehicleDetailsSection/VehicleDetailsSection";
import Line from "../../components/Line/Line";
import BookingForm from "../../components/BookingForm/BookingForm";
import { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

export default function CamperPage() {
  const dispatch = useDispatch();
  const currentLocation = useLocation();
  const match = currentLocation.pathname.match(/(\d+)(?!.*\d)/);
  const camperId = match ? match[1] : null;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCamper() {
      try {
        await dispatch(fetchExactCamper(camperId));
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCamper();
  }, [dispatch, camperId]);

  const camper = useSelector(selectCamper);

  return (
    <div className={css.container}>
      {error ? "Error! Please try again!" : ""}
      {isLoading ? <Loader /> : <VehicleDetailsSection camper={camper} />}
      <section className={css.section}>
        <div>
          <ul className={css.navLinkList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
                }
                to="features"
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
                }
                to="reviews"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Line />

        <div className={css.bottomSection}>
          <div className={css.revFeatContainer}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
          <div className={css.bookingForm}>
            <BookingForm />
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
}
