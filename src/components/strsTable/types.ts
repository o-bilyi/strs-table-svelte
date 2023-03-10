export type Column = {
  id: string;
  label: string;
  sortable: boolean;
}

export type SearchEvent = {
  detail: {
    query: string;
  }
};

export type FiltersEvent = {
  detail: {
    filters: string[];
    // [key: string]: string;
  }
};

export type FilterEvent = {
  detail: {
    [key: string]: string
  }
};

export type GenericItem = Record<string, unknown>;