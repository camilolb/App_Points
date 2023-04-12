export interface DefaultSagaAction<T> {
  type: string;
  payload: T;
}
