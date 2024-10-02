"use client";
import { Input } from "./ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`/produse?${params.toString()}`);
  }, 300);

  useEffect(() => {
    const currentSearch = searchParams.get("search");
    if (currentSearch !== search) {
      setSearch(currentSearch || "");
    }
  }, [searchParams, search]);

  return (
    <Input
      type='search'
      placeholder='Caută o mașină...'
      className='max-w-xs dark:bg-muted'
      onChange={(e) => {
        const value = e.target.value;
        setSearch(value);
        handleSearch(value);
      }}
      value={search}
    />
  );
}

export default NavSearch;
