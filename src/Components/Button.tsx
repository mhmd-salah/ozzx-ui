interface Iprops {
  children: React.ReactNode;
}

export const Button = ({ children }: Iprops) => {
  return <button className="">{children}</button>;
};
