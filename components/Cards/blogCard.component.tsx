import React from "react";

import styles from "./card.module.css";
import { Assets } from "@/static/assets/assets";
import CalendarIcon from "../Icons/CalendarIcon";
import PlayIcon from "../Icons/PlayIcon";
import User2Icon from "../Icons/User2Icon";

const BlogCard: React.FC<Props> = ({ type = EventCardType.PIC }) => {
  return (
    <div className={styles.eventCard}>
      {type === EventCardType.PIC ? (
        <div className={styles.eventPic}>
          <img src={Assets.iphone} alt="TestImage" />
        </div>
      ) : (
        <div className={styles.eventVideo}>
          <div className={styles.eventControl}>
            <PlayIcon className={styles.eventControlIcon} />
          </div>
        </div>
      )}
      <div className={styles.eventDetails}>
        <div className={styles.blogBadge}>
          <p>Event</p>
        </div>
        <div className={styles.eventDetail}>
          <h6>Discovering the Future of Event Management</h6>
        </div>
        <div className={styles.blogInfos}>
          <div className={styles.blogInfo}>
            <User2Icon className={styles.blogIcon} />
            <p>by Admin</p>
          </div>
          <div className={styles.blogInfo}>
            <CalendarIcon className={styles.blogIcon} />
            <p>03 Oct, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

interface Props {
  type?: EventCardType;
}

export enum EventCardType {
  VIDEO,
  PIC,
}
