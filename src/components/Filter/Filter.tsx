import styles from "./filter.module.css";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";

interface FilterProps {
  search: string;
  level: string;
  duration: string;
  onSearchChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onDurationChange: (value: string) => void;
}

const durationOptions = [
  { label: "duration", value: "" },
  { label: "1–5 days", value: "0_x_5" },
  { label: "6–10 days", value: "5_x_10" },
  { label: "10 days or more", value: "10" },
];
const levelOptions = [
  { label: "level", value: "" },
  { label: "easy", value: "easy" },
  { label: "moderate", value: "moderate" },
  { label: "difficult", value: "difficult" },
];

const Filter: React.FC<FilterProps> = ({
  search,
  level,
  duration,
  onSearchChange,
  onLevelChange,
  onDurationChange,
}) => {
  return (
    <section className={styles["trips-filter"]}>
      <h2 className={styles["visually-hidden"]}>Trips filter</h2>
      <form
        className={styles["trips-filter__form"]}
        autoComplete="off"
      >
        <label className={styles["trips-filter__search input"]}>
          <Input
            label="Search by name"
            data-test-id="filter"
            name="search"
            type="search"
            placeholder="search by title"
            onChange={(e) => onSearchChange(e.target.value)}
            value={search}
            className="trips-filter__search"
            hiddenLabel={true}
          />
        </label>
        <Select
          label="Search by duration"
          options={durationOptions}
          data-test-id="filter-duration"
          name="duration"
          value={duration}
          onChange={(e) => onDurationChange(e.target.value)}
        />
        <Select
          label="Search by level"
          options={levelOptions}
          data-test-id="filter-level"
          name="level"
          value={level}
          onChange={(e) => onLevelChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export { Filter };
