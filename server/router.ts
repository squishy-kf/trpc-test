import { t } from "./trpcSetup";

export interface myDataset {
    name: string;
    age?: number;
}

export const appRouter = t.router({
    something: t.router({
        mydata: t.procedure.query((): myDataset[] => {
            console.log("getting data");
            return [
                {
                    name: "data",
                    age: 10,
                },
                {
                    name: "set",
                    age: 20,
                },
            ];
        }),
    }),
});

export type AppRouter = typeof appRouter;
