import { myDataset } from "../../server/router";

export default function ChildComp({ data }: { data: myDataset[] | undefined }) {
    const mappedData = data?.map((val) => {
        return (
            <div key={val.age}>
                <div>name: {val.name}</div>
                <div>age: {val.age}</div>
            </div>
        );
    });

    return <div>data from parent: {mappedData}</div>;
}
