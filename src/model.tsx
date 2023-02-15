export interface WindowProps {
  rowHeight: number;
  children: Array<JSX.Element>;
  gap?: number;
  isVirtualizationEnabled?: boolean;
}
