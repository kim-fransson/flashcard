"use client";

import React from "react";
import Button from "../Button";
import { Eraser } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "@/helpers";

function ResetFiltersButton() {
  const router = useRouter();
  const pathName = usePathname();

  function handleResetFilters() {
    router.push(pathName, { scroll: false });
    toast("Card filters cleared.");
  }
  return (
    <Button onClick={handleResetFilters} variant='border'>
      <Eraser size={20} />
      Clear filters
    </Button>
  );
}

export default ResetFiltersButton;
