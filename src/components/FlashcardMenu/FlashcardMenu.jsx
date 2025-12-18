"use client";

import React from "react";
import { EllipsisVertical, SquarePen, Trash2 } from "lucide-react";
import {
  Button as RACButton,
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
  Pressable,
} from "react-aria-components";

import { menu, menuItem } from "./FlashcardMenu.module.css";
import IconButton from "../IconButton";

function FlashcardMenu({ onDelete, onEdit }) {
  return (
    <MenuTrigger>
      <Pressable>
        <IconButton
          label='Open Flashcard settings'
          icon='ellipsis-vertical'
        />
      </Pressable>

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
