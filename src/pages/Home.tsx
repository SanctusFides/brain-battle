import DataTable from "../components/DataTable";

type Entry = {
  id: number;
  dates: string;
  tournament: string;
  city: string;
  timezone: string;
  mode: string;
  registration: string;
  judge: string;
}

const testData = [
  {
    id: 1,
    dates: "June 10-12, 2024",
    tournament: "Summer Open",
    city: "Los Angeles",
    timezone: "PDT",
    mode: "In-Person",
    registration: "Open",
    judge: "Alice Smith",
  },
  {
    id: 2,
    dates: "July 5-7, 2024",
    tournament: "Midyear Championship",
    city: "New York",
    timezone: "EDT",
    mode: "Hybrid",
    registration: "Closed",
    judge: "Bob Johnson",
  },
];

const columns: Array<{
  key: keyof Entry;
  header: string;
  render?: (value: Entry[keyof Entry]) => React.ReactNode;
}> = [
  { key: 'dates', header: 'Dates' },
  { key: 'tournament', header: 'Tournament' },
  { key: 'city', header: 'City' },  
  { key: 'timezone', header: 'LO/TZ' },
  { key: 'mode', header: 'Mode' },
  { key: 'registration', header: 'Registration' },
  { key: 'judge', header: 'Judge' },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <h1>UPCOMING TOURNAMENTS</h1>
      <div className="m-4">
        <DataTable<Entry> data={testData} columns={columns} />
      </div>
    </div>
  );
}

 
