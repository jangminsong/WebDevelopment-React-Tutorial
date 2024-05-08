interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
