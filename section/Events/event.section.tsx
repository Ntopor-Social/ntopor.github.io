import React, { useState } from "react";

import styles from "./event.module.css";
import Dash from "@/components/Dash/dash.component";
import Button, { ButtonSize } from "@/components/button/button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import MapPinIcon from "@/components/Icons/MapPinIcon";
import DropDownInput, {
  Options,
} from "@/components/Inputs/dropdow-input.component";
import GridIcon from "@/components/Icons/GridIcon";
import DollarIcon from "@/components/Icons/DollarIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import EventCard, {
  EventCardType,
} from "@/components/Cards/eventCard.component";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import banner from "@utils/banner.json";

const Events: React.FC = () => {
  const [location, setLocation] = useState<Options>({
    value: 1,
    label: "Bamenda",
  });

  const [category, setCategory] = useState<Options>({
    value: 1,
    label: "Music",
  });

  const [price, setPrice] = useState<Options>({
    value: 1,
    label: "1,000 XAF - 5,000 XAF",
  });
  let locations: Options[] = [
    { value: 1, label: "Bamenda" },
    { value: 2, label: "Buea" },
    { value: 3, label: "Yaounde" },
  ];

  let categories: Options[] = [
    { value: 1, label: "Music" },
    { value: 2, label: "Dance" },
    { value: 3, label: "Business" },
  ];

  let prices: Options[] = [
    { value: 1, label: "1,000 XAF - 5,000 XAF" },
    { value: 2, label: "100 XAF - 500 XAF" },
    { value: 3, label: "1,500 XAF - 2,000 XAF" },
  ];

  return (
    <div className={styles.clip}>
      <div className={styles.banner}>
        <div className={styles.bannerContents}>
          {banner.map((ban: any, index: number) => (
            <div key={index} className={`${styles.ban}`}>
              <p className={ban.icon ? styles.underlined : ""}>{ban.label}</p>
              {ban.icon && (
                <div className={styles.banIcon}>
                  <ArrowIcon className={styles.bannerIcon} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <section className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.topTitleContainer}>
            <Dash /> <h3>4500+ Events</h3>
          </div>
          <h4>
            Our <span>Featured Events</span>
          </h4>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.searchContainer}>
            <div className={styles.searchBanner}>
              <div className={styles.searchParams}>
                <div>
                  <DropDownInput
                    label="Location"
                    icon={<MapPinIcon className={styles.dropIcon} />}
                    options={locations}
                    selected={location}
                    setSelected={setLocation}
                  />
                </div>
                <div className={styles.searchParam}>
                  <DropDownInput
                    label="Category"
                    icon={<GridIcon className={styles.dropIcon} />}
                    options={categories}
                    selected={category}
                    setSelected={setCategory}
                  />
                </div>
                <div className={styles.searchParam}>
                  <DropDownInput
                    label="Price Range"
                    icon={<DollarIcon className={styles.dropIcon} />}
                    options={prices}
                    selected={price}
                    setSelected={setPrice}
                  />
                </div>
              </div>
              <div>
                <Button
                  text={"Search"}
                  size={ButtonSize.NORMAL}
                  icon={<SearchIcon className={styles.searchIcon} />}
                />
              </div>
            </div>
          </div>
          <div className={styles.eventsContainer}>
            <EventCard type={EventCardType.VIDEO} />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
