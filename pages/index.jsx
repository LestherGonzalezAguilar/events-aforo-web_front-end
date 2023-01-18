import React from "react";
import { Banner, FilterEvents, NavBar } from "../components/client";
import { PageLayout } from "../components/client/layouts/PageLayout";
import { Box, Text } from "@chakra-ui/react";

/**
 * the home page
 *
 * @type {Function}
 * @returns {React.ReactElement} Props Content Home Page
 */
export default function HomePage() {
  return (
    <PageLayout>
      <NavBar />
      <Banner />
      <FilterEvents />

    </PageLayout >
  )
}
