import React from "react";

import styles from "./card.module.css";
import { Assets } from "@/static/assets/assets";
import MapPinIcon from "../Icons/MapPinIcon";
import Grid2Icon from "../Icons/Grid2Icon";
import CalendarIcon from "../Icons/CalendarIcon";
import ClockIcon from "../Icons/ClockIcon";
import PlayIcon from "../Icons/PlayIcon";

const EventCard: React.FC<Props> = ({ type = EventCardType.PIC }) => {
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
        <div className={styles.eventDetail}>
          <h6>SoundScapeFest</h6>
          <div className={styles.eventLocation}>
            <MapPinIcon className={styles.locationIcon} />
            <p>New York, USA</p>
          </div>
          <p>
            1,000 XAF
            <span>/person</span>
          </p>
        </div>
        <div className={styles.divider2} />
        <div className={styles.eventInfos}>
          <div className={styles.eventInfo}>
            <Grid2Icon className={styles.eventIcon} />
            <p>Music</p>
          </div>
          <div className={styles.eventInfo}>
            <CalendarIcon className={styles.eventIcon} />
            <p>28 Sep</p>
          </div>
          <div className={styles.eventInfo}>
            <ClockIcon className={styles.eventIcon} />
            <p>10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

interface Props {
  type?: EventCardType;
}

export enum EventCardType {
  VIDEO,
  PIC,
}
