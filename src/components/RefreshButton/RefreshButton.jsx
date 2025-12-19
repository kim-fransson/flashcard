"use client";

import React from "react";
import Button from "../Button";
import { ListRestart } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/helpers";

function RefreshButton() {
  const router = useRouter();
  function handleRefresh() {
    router.refresh();
    toast("Card list refreshed.");
  }

  return (
    <Button onClick={handleRefresh} variant='border'>
      <ListRestart size={20} />
      Refresh data
    </Button>
  );
}

export default RefreshButton;
