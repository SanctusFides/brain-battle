import DataTable from "../components/DataTable";
import Header from "../components/Header";

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
    dates: "6/10 - 6/12",
    tournament: "Summer Open",
    city: "Los Angeles",
    timezone: "PDT",
    mode: "In-Person",
    registration: "Open",
    judge: "Alice Smith",
  },
  {
    id: 2,
    dates: "7/5 - 7/7",
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
  width: number;
  format?: string;
  render?: (value: Entry[keyof Entry]) => React.ReactNode;
}> = [
  { key: 'dates', header: 'Dates', width: .5 , format: "center"},
  { key: 'tournament', header: 'Tournament', width: 3 },
  { key: 'city', header: 'City', width: 1 },  
  { key: 'timezone', header: 'LO/TZ', width: .5 },
  { key: 'mode', header: 'Mode', width: 1 },
  { key: 'registration', header: 'Registration', width: 1, format: "center" },
  { key: 'judge', header: 'Judge', width: 1 },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Header /> 
      <h1 className="ml-5">UPCOMING TOURNAMENTS</h1>
      <div className="m-4 bg-white">
        <DataTable<Entry> data={testData} columns={columns} />
      </div>
    </div>
  );
}

 
