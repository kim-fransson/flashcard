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

function FlashcardMenu({ onDelete, onEdit }) {
  return (
    <MenuTrigger>
      <RACButton className={trigger} aria-label='Menu'>
        <VisuallyHidden>Open Flashcard settings</VisuallyHidden>
        <EllipsisVertical />
      </RACButton>
      <Popover placement='bottom right'>
        <Menu className={menu}>
          <MenuItem className={menuItem} onAction={onEdit}>
            <SquarePen />
            Edit
          </MenuItem>
          <MenuItem className={menuItem} onAction={onDelete}>
            <Trash2 />
            Delete
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default FlashcardMenu;
