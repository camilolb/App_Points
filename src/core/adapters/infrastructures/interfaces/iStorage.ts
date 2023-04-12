export interface IStorage {
  getItem(name: string): string | null;
  setItem(name: string, value: string): void;
  remove(name: string): void;
}
