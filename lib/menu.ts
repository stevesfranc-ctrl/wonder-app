export interface MenuItem {
  label: string;
  link: string;
}

export const menu: MenuItem[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Pools",
    link: "/pools",
  },
  {
    label: "Créer un pool",
    link: "/pools/create",
  }
];
