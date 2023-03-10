import type { Column } from '../../components/strsTable/types';

export const columns: Column[] = [
  {
    id: "id",
    label: "ID",
    sortable: false,
  },
  {
    id: "email",
    label: "Email",
    sortable: true,
  },
  {
    id: "name",
    label: "Name",
    sortable: true,
  },
  {
    id: "phone",
    label: "Phone",
    sortable: true,
  },
  {
    id: "username",
    label: "User Name",
    sortable: true,
  },
  {
    id: "website",
    label: "Website",
    sortable: false,
  },
];