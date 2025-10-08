type AvatarTitleProps = {
  children: React.ReactNode;
};
export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <strong className=" text-body-xs text-gray-200">{children}</strong>;
};
