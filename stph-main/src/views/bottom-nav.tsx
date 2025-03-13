import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const menuItems = ["LEARN", "EARN", "BUILD", "CHILL"];

export default function BottomNav() {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full items-center justify-center">
        <div className="w-full max-w-[1040px] flex flex-col gap-8 p-4">
          <div className="w-full flex items-center justify-between">
            <div className="relative w-auto min-w-[150px] min-h-[40px]">
              <Image
                src="/base/Base_Wordmark_White.png"
                alt="Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex items-center gap-8 text-gray-300 tracking-wide">
              {menuItems.map((item) => (
                <p key={item} className="text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <Separator />

          <div className="w-full flex items-center justify-between">
            <p className="text-sm text-gray-400">
              © BASE PHL 2024. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full flex flex-col items-center gap-6 p-4">
        <div className="relative w-[240px] h-[40px]">
          <Image
            src="/base/Base_Symbol_Blue.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-2 w-full justify-between text-gray-300 tracking-wide">
          {menuItems.map((item) => (
            <p key={item} className="text-sm">
              {item}
            </p>
          ))}
        </div>

        <p className="text-sm text-gray-400">
          © BASE PHL 2024. All rights reserved
        </p>
      </div>
    </>
  );
}
