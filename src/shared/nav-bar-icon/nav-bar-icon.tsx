export interface NavBarIconProps {
  Icon: () => JSX.Element;
  SelectedIcon: () => JSX.Element;
}

export const NavBarIcon =
  ({Icon, SelectedIcon}: NavBarIconProps) =>
  ({focused}: {focused: boolean}) => {
    if (focused) {
      return SelectedIcon();
    }
    return Icon();
  };

export default NavBarIcon;
