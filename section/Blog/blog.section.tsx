import React from "react";

import styles from "./blog.module.css";
import Dash from "@/components/Dash/dash.component";
import BlogCard from "@/components/Cards/blogCard.component";

const Blog: React.FC = () => {
  return (
    <section className={styles.container} id="blog">
      <div className={styles.containerTop}>
        <div className={styles.topTitle}>
          <div className={styles.topTitleContainer}>
            <Dash /> <h3>Blog & News</h3>
          </div>
          <h4>
            Our Latest 
            <span> Blog</span> & <span>News</span>
          </h4>
        </div>
        <div className={styles.topDescription}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
