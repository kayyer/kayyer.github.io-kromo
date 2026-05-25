import React from "react";
import { NavLink } from "react-router";
import { Stack } from "@fluentui/react"; // or your actual imports
import { Subtitle1 } from "@fluentui/react-components";

export default function Navbar() {
  return (
    <Stack
      horizontal
      className="w-full justify-center"
      style={{
        backgroundColor: "black",
        height: "72px",
        padding: "0 60px",
        boxShadow: "0 2px 8px rgba(255, 255, 255, 0.1)",
        gap: "48px", // more spacing between nav items
      }}
    >
      {[
        { label: "Nyitooldal", to: "/" },
        { label: "ComingSoon", to: "/coming-soon" },
      ].map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          style={({ isActive }) => ({
            color: isActive ? "plum" : "white",
            fontWeight: isActive ? "600" : "400",
            transition: "color 0.3s ease, background-color 0.3s ease",
            textDecoration: "none",
            borderRadius: "8px",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            height: "72px",
            fontFamily: "Helvetica, sans-serif",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: isActive ? "rgba(221, 160, 221, 0.15)" : "transparent",
          })}
          onMouseEnter={e => {
            if (!e.currentTarget.style.backgroundColor.includes("rgba")) {
              e.currentTarget.style.color = "plum";
              e.currentTarget.style.backgroundColor = "rgba(221, 160, 221, 0.08)";
            }
          }}
          onMouseLeave={e => {
            if (!e.currentTarget.classList.contains("active")) {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <Subtitle1 style={{ lineHeight: "72px", margin: 0 }}>{label}</Subtitle1>
        </NavLink>
      ))}
    </Stack>
  );
}
