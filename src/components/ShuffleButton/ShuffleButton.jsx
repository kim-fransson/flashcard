"use client";

import React from "react";
import Button from "../Button";
import { Shuffle } from "lucide-react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { createQueryString } from "@/helpers";

function ShuffleButton() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function handleShuffle() {
    const seed = Math.floor(Math.random() * 1_000_000_000);
    router.push(
      pathName + "?" + createQueryString(searchParams, "seed", seed),
      { scroll: false }
    );
  }

  return (
    <Button onClick={handleShuffle} variant='border'>
      <Shuffle size={20} />
      Shuffle
    </Button>
  );
}

export default ShuffleButton;
