import { Children } from "react";

export const metadata = {
  title: "Admin: Facebook - connect with friends and world around you",
  description: "Admin:  Facebook is a social utitlity that connects people with friends",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin navbar</span>
    {children}
    </>
  );
}
