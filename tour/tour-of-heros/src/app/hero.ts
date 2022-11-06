export interface Hero {
  id: number;
  name: string;
  abilities: {
    str: number,
    wis: number,
    dex: number,
    con: number,
    int: number,
    cha: number
  }
}