import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { FaRegTrashCan } from "react-icons/fa6";

 
export function DeleteProps() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        <FaRegTrashCan/>
      </Button> */}
      <div onClick={handleOpen} className=" cursor-pointer rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-2 "> 
            <FaRegTrashCan  size={20}/>
        </div> 
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Hapus Product.</DialogHeader>
        <DialogBody>
          Apakah Anda Ingin Menghapus Product
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Batal</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Ya</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}