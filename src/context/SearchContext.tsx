"use client";

import { Track } from "@/components/DataTable/Columns";
import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextProps {
  query: string;
  setQuery: (query: string) => void;
  data: Track[];
  setData: (data: Track[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  limit: number;
  offset: number;
  setOffset: (offset: number) => void;
  hasMore: boolean;
  setHasMore: (hasMore: boolean) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [limit] = useState<number>(6);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        limit,
        offset,
        setOffset,
        hasMore,
        setHasMore,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
