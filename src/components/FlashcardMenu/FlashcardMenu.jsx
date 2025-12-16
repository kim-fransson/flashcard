"use client";

import React from "react";
import { EllipsisVertical, SquarePen, Trash2 } from "lucide-react";
import {
  Button as RACButton,
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
} from "react-aria-components";

import VisuallyHidden from "../VisuallyHidden";

import { trigger, menu, menuItem } from "./FlashcardMenu.module.css";

function FlashcardMenu() {
  return (
    <MenuTrigger>
      <RACButton className={trigger} aria-label='Menu'>
        <VisuallyHidden>Open Flashcard settings</VisuallyHidden>
        <EllipsisVertical />
      </RACButton>
      <Popover>
        <Menu className={menu}>
          <MenuItem
            className={menuItem}
            onAction={() => alert("Edit")}
          >
            <SquarePen />
            Edit
          </MenuItem>
          <MenuItem
            className={menuItem}
            onAction={() => alert("Delete")}
          >
            <Trash2 />
            Delete
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default FlashcardMenu;
