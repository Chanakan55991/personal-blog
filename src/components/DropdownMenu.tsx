import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMenu } from "react-icons/io5/index";
import DropdownMenuItem from "./DropdownMenuItem";

export default function DropdownMenu() {
  return (
    <Menu as='div' className='relative inline-block text-left'><div>
      <Menu.Button className='inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all' aria-label='menu'>
        <IoMenu className='h-5 w-5' />
      </Menu.Button>
    </div>

      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transtition ease-in duration-75" leaveFrom="transform opacity-1000 scale-100" leaveTo="transform opacity-0 scale-95">
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zing-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-1-ring-black ring-opacity-5 focus:outlint-none divide-zinc-400 dark:divide-zinc-700'>
          <div className='py-1'>
            <div className='px-3 py-2 uppercase font-bold text-xs'>
              Categories
            </div>
            <DropdownMenuItem href='/categories/general'>
              General
            </DropdownMenuItem>
            <DropdownMenuItem href='/categories/tech'>
              Tech
            </DropdownMenuItem>
            <DropdownMenuItem href='/categories/rant'>
              Rant
            </DropdownMenuItem>
            <DropdownMenuItem href='/categories/photography'>
              Photography
            </DropdownMenuItem>
            <DropdownMenuItem href='/categories/productivity'>
              Productivity
            </DropdownMenuItem>
            <DropdownMenuItem href='/categories/thai'>
              ภาษาไทย
            </DropdownMenuItem>
            <DropdownMenuItem href='/categories/books'>
              Books
            </DropdownMenuItem>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
