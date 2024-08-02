import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export function ProfileDropDownMenu() {
  const isAuthenticated = true;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
          >
            <path d="M20 7H4" />
            <path d="M20 12H4" opacity=".5" />
            <path d="M20 17H4" />
          </g>
        </svg>
      </DropdownMenuTrigger>
      {!isAuthenticated ? (
        <DropdownMenuContent className="w-56 mr-4">
          <DropdownMenuLabel>Зарегистрироваться</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Войти</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Сообщение</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Избранный</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>История</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className="w-56 mr-4">
          <Link to="/account">
            <DropdownMenuItem>
              <span>Профиль</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Сообщение</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Избранный</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>История</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
