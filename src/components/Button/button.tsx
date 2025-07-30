import styles from "./button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  "data-test-id"?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

 const Button: React.FC<ButtonProps> = ({
   children,
   type = "button",
   onClick,
   "data-test-id": dataTestId,
   className,
 }) => {
   return (
     <button
       onClick={onClick}
       type={type}
       className={`${className ? styles[className] : ""} ${styles.button}`}
       data-test-id={dataTestId}
     >
       {children}
     </button>
   );
 };
export {Button}