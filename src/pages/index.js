import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Modal from "components/modal";
import Banner from "../sections/home/banner";
import KeyFeature from "../sections/home/key-feature";
import Blog from "../sections/home/blog";
import TestimonialCard from "../sections/home/testimonial";
import Course from "../sections/home/course";
import { VideoProvider } from "contexts/video/video.provider";
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout isHome={true}>
            <SEO title="Lambda: &lrm;Cursos BIM Online Profesionales de Construcción" />
            <Banner />
            <KeyFeature />
            <Course />
            <Blog />
            <TestimonialCard />
            <MessengerCustomerChat
            pageId="106755961057499"
            appId="1090833335084068"
          />
            <Modal />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
