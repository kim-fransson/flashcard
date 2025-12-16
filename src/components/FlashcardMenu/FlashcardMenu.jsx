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
import EditFlashCardModal from "../EditFlashCardModal";
import DeleteFlashCardModal from "../DeleteFlashcardModal";

function FlashcardMenu() {
  let [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  let [isDeleteModalOpen, setIsDeleteModalOpen] =
    React.useState(false);

  return (
    <>
      <MenuTrigger>
        <RACButton className={trigger} aria-label='Menu'>
          <VisuallyHidden>Open Flashcard settings</VisuallyHidden>
          <EllipsisVertical />
        </RACButton>
        <Popover>
          <Menu className={menu}>
            <MenuItem
              className={menuItem}
              onAction={() => setIsEditModalOpen(true)}
            >
              <SquarePen />
              Edit
            </MenuItem>
            <MenuItem
              className={menuItem}
              onAction={() => setIsDeleteModalOpen(true)}
            >
              <Trash2 />
              Delete
            </MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
      <EditFlashCardModal
        isOpen={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
      />
      <DeleteFlashCardModal
        isOpen={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
      />
    </>
  );
}

export default FlashcardMenu;
