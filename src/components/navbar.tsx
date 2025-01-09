import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p>Seller Centre |</p>
            <p>เปิดร้านค้า |</p>
            <p>ดาวน์โหลด |</p>
            <p>ติดตามเราบ่น</p>
            <div>lg1</div>
            <div>lg2</div>
            <div>lg3</div>
          </div>
          <div className="flex gap-4">
            <p>การแจ้งเตือน</p>
            <p>ช่วยเหลือ</p>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>ภาษา</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>ไทย</DropdownMenuItem>
                  <DropdownMenuItem>English</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p>สมัครใหม่</p>
            <p>เข้าสู่ระบบ</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-30">Shopee Logo</div>
        <div>
          <input
            className="border border-black w-full px-80 placeholder:w-80 text-left"
            placeholder="ลูกค้าใหม่ รับเลย โค้ดส่วนลด หรือโค้ดส่งฟรี*"
          ></input>
        </div>
        <div className="w-30">Cart Icon</div>
      </div>
      ;
    </>
  );
}
