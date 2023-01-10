import { NavBar } from "../components/client";
import { PageLayout } from "../components/client/layouts/PageLayout";

/**
 * the home page
 *
 * @type {Function}
 * @returns {object} Props Content Home Page
 */
export default function HomePage() {
  return (
    <PageLayout>
      <NavBar />
    </PageLayout>
  )
}
