import type { Column } from '../../components/strsTable/types';

export const columns: Column[] = [
  {
    id: "id",
    label: "ID",
    sortable: false,
  },
  {
    id: "userId",
    label: "User Id",
    sortable: false,
  },
  {
    id: "title",
    label: "Title",
    sortable: true,
  },
  {
    id: "body",
    label: "Body",
    sortable: true,
  },
];