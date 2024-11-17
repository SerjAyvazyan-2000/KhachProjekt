import './style.scss'

export const MainTitle = ({ tittle,className }: { tittle: string, className?:string }) => {
  return <h2 className={`main-tittle ${className}`}>{tittle}</h2>;
};
