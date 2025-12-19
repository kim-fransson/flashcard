"use client";

import React from "react";
import Checkbox from "../Checkbox";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { createQueryString } from "@/helpers";

function HideMasteredCheckbox() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const hide = searchParams.get("hideMastered") === "true";

  function handleToggle() {
    router.push(
      pathName +
        "?" +
        createQueryString(searchParams, "hideMastered", !hide),
      { scroll: false }
    );
  }

  return (
    <Checkbox
      checked={hide}
      onChange={handleToggle}
      label='Hide Mastered'
    />
  );
}

export default HideMasteredCheckbox;
