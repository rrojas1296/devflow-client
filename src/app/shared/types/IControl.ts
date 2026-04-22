export interface IControl<T> {
  name: T;
  label: string;
  placeholder: string;
  type: HTMLInputElement['type'];
  className?: string;
}
