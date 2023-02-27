import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../baseUrl';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
apiUrl=BaseUrl.apiUrl;
url="SuperHero";

  constructor(private http:HttpClient) { }


public getSuperHeroes(): Observable<SuperHero[]> {
  return this.http.get<SuperHero[]>(`${this.apiUrl}/${this.url}`);
}


public updateHero(hero:SuperHero): Observable<SuperHero[]> {
  return this.http.put<SuperHero[]>(
    `${this.apiUrl}/${this.url}`,
    hero
    );
}


public createHero(hero:SuperHero): Observable<SuperHero[]> {
  return this.http.post<SuperHero[]>(
    `${this.apiUrl}/${this.url}`,
    hero
    );
}

public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
  return this.http.delete<SuperHero[]>(
    `${this.apiUrl}/${this.url}/${hero.id}`
  );
}
}
