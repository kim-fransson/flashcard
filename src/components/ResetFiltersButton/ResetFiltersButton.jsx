"use client";

import React from "react";
import Button from "../Button";
import { Eraser } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function ResetFiltersButton() {
  const router = useRouter();
  const pathName = usePathname();

  function handleResetFilters() {
    router.push(pathName, { scroll: false });
  }
  return (
    <Button onClick={handleResetFilters} variant='border'>
      <Eraser />
      Clear filters
    </Button>
  );
}

export default ResetFiltersButton;
