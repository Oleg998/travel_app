import { TripCard } from "./TripCard";
export interface Trip {
  id: string;
  title: string;
  image: string;
  duration: number;
  level: string;
  price: number;
  description?: string;
  createdAt?: string;
}

interface Props {
  trip: Trip;
}
const TripsListItem: React.FC<Props> = ({ trip }) => {
  return (
    <TripCard
      key={trip.id}
      image={trip.image}
      title={trip.title}
      duration={trip.duration}
      level={trip.level}
      price={trip.price}
      link={`/trip/${trip.id}`}
    />
  );
};

export { TripsListItem };
