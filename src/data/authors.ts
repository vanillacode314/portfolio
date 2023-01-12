export interface Author {
  id: string;
  name: string;
  description: string;
}

export default [
  {
    id: "raqueebuddinaziz",
    name: "Raqueebuddin Aziz",
    description: `Web designer & developer`,
  },
] satisfies Author[];
