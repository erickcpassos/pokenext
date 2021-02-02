import React from "react";
import Link from "next/link";

function SidebarItem({ children, href }) {
	return (
		<Link href={href}>
			<a className="border-b-2 border-gray-300 pr-4 my-2 pl-1 w-max hover:border-red-500 transition-all">
				{children}
			</a>
		</Link>
	);
}

function Sidebar() {
	return (
		<div>
			<div className="hidden lg:block fixed right-0 bg-white ring-1 ring-red-500 w-2/12 h-screen top-8 z-10 flex-grow p-5">
				<ul className="flex flex-col">
					<SidebarItem href="http://localhost:3000/">ALL GENS</SidebarItem>
					<SidebarItem href="/1">GEN I</SidebarItem>
					<SidebarItem href="/2">GEN II</SidebarItem>
					<SidebarItem href="/3">GEN III</SidebarItem>
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
