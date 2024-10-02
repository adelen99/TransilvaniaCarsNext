"use client";

import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input"; // Your input component
import { useSearchParams, useRouter } from "next/navigation";

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
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value); // Update state immediately for immediate feedback
    handleSearch(value); // Call debounced function
  };

  return (
    <Input
      type='search'
      placeholder='Caută o mașină...'
      className='max-w-xs dark:bg-muted'
      onChange={handleChange}
      value={search}
    />
  );
}

export default NavSearch;
