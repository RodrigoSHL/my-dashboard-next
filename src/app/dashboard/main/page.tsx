import { SimpleWidget } from "@/components";
import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';


export default function MainPage() {
  return (
    <div className="text-black p-2 m-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span>General Information</span>

      <WidgetsGrid />

    </div>
  );
}

