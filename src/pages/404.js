import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="px-4 py-8 md:p-8 sm:py-0">
        <Image filename="abduction-illustration.svg" className="block mx-auto w-1/2" />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
