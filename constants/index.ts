import {
  Contact2,
  FileCode2,
  FolderArchive,
  Home,
  ListCollapse,
} from "lucide-react";

export const navLinks = [
  { name: "Home", route: "/", icon: Home },
  { name: "About", route: "/about", icon: ListCollapse },
  { name: "Blogs", route: "/blogs", icon: FileCode2 },
  { name: "Archive", route: "/blogs/archive", icon: FolderArchive },
  { name: "Contact", route: "/contact", icon: Contact2 },
];
