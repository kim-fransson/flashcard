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

  const memoizedCreateQueryString = React.useCallback(
    (name, value) => {
      return createQueryString(searchParams, name, value);
    },
    [searchParams]
  );

  function handleShuffle() {
    const seed = Math.floor(Math.random() * 1_000_000_000);
    router.push(
      pathName + "?" + memoizedCreateQueryString("shuffle", seed)
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
