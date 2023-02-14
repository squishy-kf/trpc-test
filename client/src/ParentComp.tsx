import ChildComp from "./ChildComp";
import { trpc } from "./trpc";

export default function ParentComp() {
    const { data, isLoading } = trpc.something.mydata.useQuery();

    return isLoading ? <div>loading</div> : <ChildComp data={data} />;
}
