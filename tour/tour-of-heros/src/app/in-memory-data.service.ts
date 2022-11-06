import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 13, name: 'Bombasto',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 14, name: 'Celeritas',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 15, name: 'Magneta',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 16, name: 'RubberMan',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 17, name: 'Dynama',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 18, name: 'Dr. IQ',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 19, name: 'Magma',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
      { id: 20, name: 'Tornado',
        abilities: {str: 10, wis: 10, dex: 10, con: 10, int: 10, cha: 10} },
    ]
    return {heroes}
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero=>hero.id)) + 1 : 11;
  }
  constructor() { }
}
