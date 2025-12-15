import { KNOWN_COUNT_MAX } from "@/constants";
import React from "react";
import Tag from "../Tag";
import { Brain } from "lucide-react";
import ProgressBar from "../ProgressBar";

function KnownCount({ value }) {
  if (value === KNOWN_COUNT_MAX) {
    return (
      <Tag color='teal'>
        <Brain size={20} strokeWidth={3} />
        Mastered {`${KNOWN_COUNT_MAX}/${KNOWN_COUNT_MAX}`}
      </Tag>
    );
  }

  return <ProgressBar value={value} />;
}

export default KnownCount;
