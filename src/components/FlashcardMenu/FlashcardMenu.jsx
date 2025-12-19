"use client";

import React from "react";
import { SquarePen, Trash2 } from "lucide-react";
import {
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
  Pressable,
} from "react-aria-components";

import styles from "./FlashcardMenu.module.css";
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
        <Menu className={styles.menu}>
          <MenuItem className={styles.menuItem} onAction={onEdit}>
            <SquarePen />
            Edit
          </MenuItem>
          <MenuItem className={styles.menuItem} onAction={onDelete}>
            <Trash2 />
            Delete
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default FlashcardMenu;
